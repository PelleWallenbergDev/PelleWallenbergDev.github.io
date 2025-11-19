

<template>
  <article class="project-item" @click="$emit('open', project.id)" role="button" tabindex="0">
    <!-- larger thumbnail: use first image from images array if present -->
    <img v-if="displayImage" :src="displayImage" :alt="project.title" class="thumb" />
    <div class="meta">
      <h3 class="title">{{ project.title }}</h3>
      <!-- clamp description to two lines, show full text on hover via title -->
      <p class="desc" :title="project.description">{{ project.description }}</p>
      <ul class="tags">
        <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  project: { id: string; title: string; description: string; image?: string; images?: string[]; tags: string[] }
}>()

// keep `project` available for the template (same name as before)
const project = props.project

const displayImage = computed(() => {
  if (props.project.images && props.project.images.length) return props.project.images[0]
  return props.project.image ?? null
})
</script>

<style scoped>
.project-item {
  display: flex;
  gap: 1rem;
  padding: 0.9rem;
  border-radius: 10px;
  cursor: pointer;
  align-items: center;
  /* use workspace color variables from src/assets/main.css */
  background: var(--blue);
  border: 1px solid rgba(255,255,255,0.04);
  transition: transform 120ms ease, box-shadow 120ms ease;
}
.project-item:hover{
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}
.thumb { width: 240px; height: 160px; object-fit: cover; border-radius: 6px; border: 2px solid var(--cerise); }
.meta { flex: 1; }
.title { margin: 0 0 0.25rem; font-size: 1.5rem; color: var(--black); }
.desc { margin: 0 0 0.5rem; color: rgba(0,0,0,0.7); font-size: 0.95rem;
  /* clamp to 2 lines with ellipsis */
  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tags { list-style: none; padding: 0; display:flex; gap:0.5rem; margin:0; flex-wrap:wrap }
.tag { padding:0.25rem 0.6rem; border-radius:999px; font-size:0.78rem; color: var(--black); }
/* cycle tag background colors to use defined palette */
.tag:nth-child(3n+1){ background: var(--cerise); color: #fff }
.tag:nth-child(3n+2){ background: var(--pink); color: #000 }
.tag:nth-child(3n){ background: var(--grey); color: #000 }
</style>


