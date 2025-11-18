<template>
  <article class="project-item" @click="$emit('open', project.id)" role="button" tabindex="0">
    <img v-if="project.image" :src="project.image" :alt="project.title" class="thumb" />
    <div class="meta">
      <h3 class="title">{{ project.title }}</h3>
      <p class="desc">{{ project.description }}</p>
      <ul class="tags">
        <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  project: { id: string; title: string; description: string; image?: string; tags: string[] }
}>()
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
  background: linear-gradient(90deg, var(--blue) 0%, rgba(162,197,172,0.06) 100%);
  border: 1px solid rgba(255,255,255,0.04);
  transition: transform 120ms ease, box-shadow 120ms ease;
}
.project-item:hover{
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}
.thumb { width: 120px; height: 80px; object-fit: cover; border-radius: 6px; border: 2px solid var(--cerise); }
.meta { flex: 1; }
.title { margin: 0 0 0.25rem; font-size: 1.05rem; color: var(--black); }
.desc { margin: 0 0 0.5rem; color: rgba(0,0,0,0.7); font-size: 0.95rem }
.tags { list-style: none; padding: 0; display:flex; gap:0.5rem; margin:0; flex-wrap:wrap }
.tag { padding:0.25rem 0.6rem; border-radius:999px; font-size:0.78rem; color: var(--black); }
/* cycle tag background colors to use defined palette */
.tag:nth-child(3n+1){ background: var(--cerise); color: #fff }
.tag:nth-child(3n+2){ background: var(--pink); color: #000 }
.tag:nth-child(3n){ background: var(--grey); color: #000 }
</style>
