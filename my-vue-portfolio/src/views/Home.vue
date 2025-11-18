<template>
  <div class="home">
    <h1>Welcome to My Portfolio</h1>
    <p>Explore my projects and get to know my work.</p>
    <router-link to="/portfolio" class="portfolio-link">View My Portfolio</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.portfolio-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.portfolio-link:hover {
  background-color: #367c6b;
}
</style>