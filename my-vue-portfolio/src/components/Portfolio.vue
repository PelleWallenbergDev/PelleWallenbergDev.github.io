<template>
  <div class="portfolio">
    <h1>My Portfolio</h1>
    <div class="project-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import projectsData from '../data/projects.json';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: projectsData,
    };
  },
};
</script>

<style scoped>
.portfolio {
  padding: 20px;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>