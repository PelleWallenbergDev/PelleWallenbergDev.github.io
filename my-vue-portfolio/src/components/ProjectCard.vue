<template>
  <div class="project-card">
    <img :src="project.image" alt="Project Image" class="project-image" />
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-description">{{ project.description }}</p>
    <a :href="project.link" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.project-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.project-title {
  font-size: 1.5em;
  margin: 10px 0;
}

.project-description {
  font-size: 1em;
  margin: 10px 0;
}

.project-link {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.project-link:hover {
  background-color: #0056b3;
}
</style>