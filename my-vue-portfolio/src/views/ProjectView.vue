<template>
  <div class="project-view">
    <h1>{{ project.title }}</h1>
    <img :src="project.image" alt="Project Image" />
    <p>{{ project.description }}</p>
    <a :href="project.link" target="_blank">View Project</a>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'ProjectView',
  setup() {
    const route = useRoute();
    const project = ref({});

    const fetchProjectData = async () => {
      const response = await fetch('/data/projects.json');
      const projects = await response.json();
      const projectId = route.params.id;
      project.value = projects.find(p => p.id === projectId);
    };

    onMounted(fetchProjectData);

    return {
      project,
    };
  },
};
</script>

<style scoped>
.project-view {
  padding: 20px;
}
.project-view img {
  max-width: 100%;
  height: auto;
}
</style>