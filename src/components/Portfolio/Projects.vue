
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import ProjectItem from './ProjectItem.vue'
import projects from '@/data/projects.json'

type Project = {
    id: string
    title: string
    description: string
    image?: string
    images?: string[]
    tags: string[]
}

const list = ref<Project[]>(projects as Project[])
const selectedId = ref<string | null>(null)
const selectedProject = computed(() => list.value.find(p => p.id === selectedId.value) ?? null)

// carousel state for the selected project detail view
const currentImageIndex = ref(0)
const images = computed(() => {
    if (!selectedProject.value) return [] as string[]
    if (selectedProject.value.images && selectedProject.value.images.length) return selectedProject.value.images
    if (selectedProject.value.image) return [selectedProject.value.image]
    return [] as string[]
})

function prevImage() {
    if (images.value.length === 0) return
    currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length
}

function nextImage() {
    if (images.value.length === 0) return
    currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length
}

// reset carousel index whenever a different project is selected
watch(() => selectedId.value, () => {
    currentImageIndex.value = 0
})

function readProjectFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search)
        const id = params.get('project')
        selectedId.value = id
    } catch (e) {
        selectedId.value = null
    }
}

function openProject(id: string) {
    // push a new history entry so browser back works
    try {
        const url = new URL(window.location.href)
        url.searchParams.set('project', id)
        window.history.pushState({ projectId: id }, '', url.toString())
    } catch (e) {
        // fallback
        window.history.pushState({ projectId: id }, '', `?project=${id}`)
    }
    selectedId.value = id
}

function closeProject() {
    // go back in history if possible so the URL restores
    if (window.history.state && window.history.state.projectId) {
        window.history.back()
    } else {
        // no special state, just clear selection and remove query param
        try {
            const url = new URL(window.location.href)
            url.searchParams.delete('project')
            window.history.replaceState({}, '', url.toString())
        } catch (e) {
            window.history.replaceState({}, '', window.location.pathname)
        }
        selectedId.value = null
    }
}

function onPopState(e: PopStateEvent) {
    // When user navigates back/forward, update selection from URL or state
    if (e.state && (e.state as any).projectId) {
        selectedId.value = (e.state as any).projectId
    } else {
        // fallback to search param
        readProjectFromUrl()
    }
}

onMounted(() => {
    readProjectFromUrl()
    window.addEventListener('popstate', onPopState)
})

onBeforeUnmount(() => {
    window.removeEventListener('popstate', onPopState)
})
</script>



<template>
    <div class="portfolio-root">
       

        <main>
            <section v-if="!selectedProject">
                <header class="portfolio-header">
                    <h1>Portfolio</h1>
                    <p>A selection of projects. Click an item to view details.</p>
                </header>
                <section class="project-list">
                    <ProjectItem
                        v-for="p in list"
                        :key="p.id"
                        :project="p"
                        @open="openProject"
                    />
                </section>
            </section>

            <section v-else class="project-page">
                <button class="back" @click="closeProject">← Back</button>
                <article class="project-detail">
                    <h2>{{ selectedProject.title }}</h2>

                    <div v-if="images.length" class="carousel">
                            <div class="carousel-stage">
                                    <button class="carousel-btn prev" @click="prevImage" aria-label="Previous image">◀</button>
                                    <img :src="images[currentImageIndex]" :alt="selectedProject.title" />
                                    <button class="carousel-btn next" @click="nextImage" aria-label="Next image">▶</button>
                            </div>
                            <div class="carousel-indicators">
                                <span v-for="(img, idx) in images" :key="idx" :class="['dot', { active: idx === currentImageIndex }]" @click="currentImageIndex = idx"></span>
                            </div>
                    </div>

                    <ul class="tags">
                        <li v-for="t in selectedProject.tags" :key="t" class="tag">{{ t }}</li>
                    </ul>
                    <p class="desc">{{ selectedProject.description }}</p>
                </article>
            </section>
        </main>
.    </div>
</template>

<style scoped>
.portfolio-root{ padding: 2rem; }
.portfolio-header{ margin-bottom: 1.5rem }
.project-list{
        display: grid;
        grid-template-columns: 1fr; /* mobile: one per row */
        gap: 1rem;
}

@media (min-width: 768px) {
        .project-list { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
        .project-list { grid-template-columns: repeat(3, 1fr); }
}

/* center the project detail card in the viewport */
.project-page{
    position: relative;
    min-height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}
.project-detail{ width:100%; max-width: 900px }
.project-detail img{ width:100%; height:auto; border-radius:8px; margin:1rem 0; border: 3px solid var(--cerise) }

/* carousel styles */
.carousel{ position: relative; display:flex; flex-direction:column; align-items:center; margin: 1rem 0 }
.carousel-stage{ width:100%; max-width:720px; position:relative; display:flex; align-items:center; justify-content:center }
.carousel-stage img{ width:100%; height:auto; border-radius:8px; border: 3px solid var(--cerise); }
.carousel-btn{ position:absolute; top:50%; transform:translateY(-50%); background: rgba(0,0,0,0.45); color: #fff; border: 0; padding: 0.4rem 0.6rem; cursor: pointer; border-radius:6px }
.carousel-btn:hover{ background: rgba(0,0,0,0.6) }
.carousel-btn.prev{ left: 8px }
.carousel-btn.next{ right: 8px }
.carousel-indicators{ display:flex; gap:0.4rem; margin-top:0.6rem; justify-content:center }
.dot{ width:9px; height:9px; border-radius:999px; background: rgba(0,0,0,0.2); display:inline-block; cursor:pointer }
.dot.active{ background: rgba(0,0,0,0.6) }

/* back button: top-left corner of the project page */
.back{
        font-size: 1rem;
    background: transparent;
    border: 0;
    color: var(--color-heading);
    cursor: pointer;
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 30;
    padding: 0.25rem 0.5rem;
}

.back:hover { opacity: 0.9; }

.tags{ list-style:none; padding:0; display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom: 1rem; }
.tag{ padding:0.25rem 0.6rem; border-radius:999px; font-size:0.85rem; color: var(--black); }
/* match the tag color cycling used in ProjectItem.vue */
.tag:nth-child(3n+1){ background: var(--cerise); color: #fff }
.tag:nth-child(3n+2){ background: var(--pink); color: #000 }
.tag:nth-child(3n){ background: var(--grey); color: #000 }
</style>

