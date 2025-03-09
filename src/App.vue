<script setup lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from './components/Navbar.vue';
  import Hero from './components/Hero.vue';
  import About from './components/About.vue';
  import Portofolio from './components/Portofolio.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';

  defineComponent({
      name: 'App',
      components: { Navbar, Hero, About, Portofolio, Contact, Footer }
  })
</script>

<template>
  <Navbar />
  <Hero />
  <About />
  <Portofolio />
  <Contact />
  <Footer />
</template>


<style>
  ::-webkit-scrollbar {
      display: none;
  }
  html, body {
      scrollbar-width: none;
  }
  body {
    background-color: #f1f1f1;
    scroll-behavior: smooth;
  }
  .element {
    scrollbar-width: none; 
  }
  .element::-webkit-scrollbar {
    display: none;
  }
  body {
    margin-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
</style>