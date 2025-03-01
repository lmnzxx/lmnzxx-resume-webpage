<script setup lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Hero.vue';
  import About from './components/About.vue';
  import Portofolio from './components/Portofolio.vue';

  defineComponent({
      name: 'App',
      components: { Navbar, Hero, About, Portofolio }
  })
</script>

<template>
  <Navbar />
  <Hero />
  <About />
  <Portofolio />
</template>


<style>
  body {
    background-color: #f1f1f1;
    scroll-behavior: smooth;
  }
  .element {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .element::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
</style>