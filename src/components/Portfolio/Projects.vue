<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ProjectItem from './ProjectItem.vue'
import projects from '@/data/projects.json'

type Project = {
    id: string
    title: string
    description: string
    image?: string
    tags: string[]
}

const list = ref<Project[]>(projects as Project[])
const selectedId = ref<string | null>(null)
const selectedProject = computed(() => list.value.find(p => p.id === selectedId.value) ?? null)

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
        <header class="portfolio-header">
            <h1>Portfolio</h1>
            <p>A selection of projects. Click an item to view details.</p>
        </header>

        <main>
            <section v-if="!selectedProject" class="project-list">
                <ProjectItem
                    v-for="p in list"
                    :key="p.id"
                    :project="p"
                    @open="openProject"
                />
            </section>

            <section v-else class="project-page">
                <button class="back" @click="closeProject">← Back</button>
                <article class="project-detail">
                    <h2>{{ selectedProject.title }}</h2>
                    <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.title" />
                    <p class="desc">{{ selectedProject.description }}</p>
                    <ul class="tags">
                        <li v-for="t in selectedProject.tags" :key="t" class="tag">{{ t }}</li>
                    </ul>
                </article>
            </section>
        </main>
    </div>
</template>

<style scoped>
.portfolio-root{ padding: 2rem; }
.portfolio-header{ margin-bottom: 1.5rem }
.project-list{ display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem }
.project-page{ max-width: 900px }
.project-detail img{ width:100%; height:auto; border-radius:8px; margin:1rem 0; border: 3px solid var(--cerise) }
.back{ background:transparent; border:0; color:var(--black); cursor:pointer; margin-bottom:0.5rem }
.tags{ list-style:none; padding:0; display:flex; gap:0.5rem; flex-wrap:wrap }
.tag{ padding:0.25rem 0.6rem; border-radius:999px; font-size:0.85rem }
</style>