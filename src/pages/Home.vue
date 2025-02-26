<script setup lang="ts">
// @ts-ignore
import WIP from "@/components/WorkInProgress.vue";
// @ts-ignore
import Navbar from "@/components/Navbar.vue"; 
</script>

<template>
  <header>
  <link href="https://fonts.googleapis.com/css2?family=Teko&display=swap" rel="stylesheet">
  </header>

  <main>
    <Navbar/>
    <WIP/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

  p,h1,h2{
    font-family: "Teko", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: #ebdbb2;
  }

  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

</style>
