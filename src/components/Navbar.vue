<template>
    <div class="navbar" :class="{ scrolled: isScrolled }">
        <div class="navbar-content" :class="{ scrolled: isScrolled }">
            <a class="tittle-navbar" href="#home" @click.prevent="scrollTo('home')">lmnzxx</a>
            <div class="hamburger-menu" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="navigation-list" :class="{ open: isMenuOpen }">
                <li><a href="#home" @click.prevent="scrollTo('home')">Home</a></li>
                <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
                <li><a href="#portofolio" @click.prevent="scrollTo('portofolio')">Portofolio</a></li>
                <li class="contact"><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
    setup() {
        const isScrolled = ref(false);
        const isMenuOpen = ref(false);

        const handleScroll = () => {
            isScrolled.value = window.scrollY > 50;
        };

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        const scrollTo = (sectionId: string) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return { isScrolled, isMenuOpen, toggleMenu, scrollTo };
    },
});
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .navbar {
        background-color: transparent;
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: 30px;
    }

    .navbar.scrolled {
        background-color: #ffffff66;
        box-shadow: 0px 4px 4px #00000040;
        backdrop-filter: blur(10px) brightness(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 20px; /* Adjust padding on scroll */
    }

    .navbar-content {
        display: flex;
        width: 100%; /* Make it responsive */
        max-width: 1200px; /* Limit width on large screens */
        align-items: center;
        justify-content: space-between;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .navbar.scrolled .navbar-content {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .tittle-navbar {
        font-size: 2em; 
        font-family: "Helvetica-Bold", Helvetica;
        font-weight: 700;
        color: #000000;
        white-space: nowrap;
    }

    .navigation-list {
        list-style-type: none;
        display: flex;
        margin-left: auto;
    }

    .navigation-list li {
        margin: 0 2em; /* Use relative units for spacing */
    }

    .navigation-list .contact {
        margin: 0 0 0 2em; /* Use relative units for spacing */
    }

    .navigation-list li a {
        font-family: "Helvetica-Regular", Helvetica;
        font-weight: 400;
        color: #000000;
        font-size: 1.5em; /* Use relative units */
        white-space: nowrap;
        text-decoration: none;
    }

    .hamburger-menu {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        height: 20px;
        cursor: pointer;
        z-index: 100;
        transition: transform 0.3s ease-in-out;
    }

    .hamburger-menu span {
        width: 30px;
        height: 3px;
        background-color: #000;
        margin: 2px 0;
        transition: 0.4s;
    }
    .hamburger-menu.open span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger-menu.open span:nth-child(2) {
        opacity: 0;
    }

    .hamburger-menu.open span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }


    /* Media Queries */
    @media (max-width: 768px) { /* Example tablet breakpoint */
    .navbar {
        padding: 10px;
    }
    .hamburger-menu {
        display: flex;
        margin-left: auto;
    }
    .tittle-navbar {
        z-index: 100;
    }
    .navbar-content {
        flex-direction: row; /* Stack vertically on smaller screens */
        justify-content: space-between;
        align-items: center; /* Align to the left */
        padding: 10px;
        box-sizing: border-box;
    }
    .navigation-list {
        display: none; /* Hide the list by default */
        flex-direction: column;
        position: absolute;
        top: 0; /* Position below the navbar */
        left: 0;
        width: 100%;
        background-color: #ffffff66; /* Match navbar background */
        box-shadow: 0px 4px 4px #00000040;
        text-align: center;
        padding: 10px 0;
        backdrop-filter: blur(10px) brightness(100%);
        -webkit-backdrop-filter: blur(10px) brightness(100%);
    }
    .navigation-list.open {
        display: flex; /* Show the list when open */
        margin-top: 0;
    }
    .navigation-list.open ~ .tittle-navbar { 
        opacity: 0;
    }
    .navigation-list li {
        margin: 1em 0;
    }
    .navigation-list .contact {
        margin: 1em 0;
    }
    .tittle-navbar {
        font-size: 2em; 
        transition: opacity 0.3s ease-in-out;
    }
    .navigation-list li a {
        font-size: 1.2em; /* Smaller link font */
    }
    }

    @media (max-width: 480px) { /* Example mobile breakpoint */
        .tittle-navbar {
            font-size: 1.2em;
        }
    }
</style>