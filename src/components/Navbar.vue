<template>
    <div class="navbar" :class="{ scrolled: isScrolled }">
        <div class="navbar-content">
            <a class="tittle-navbar" href="#home" @click.prevent="scrollTo('home')">lmnzxx</a>
            <div class="hamburger-menu" :class="{ open: isMenuOpen }" @click="toggleMenu">
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

<script lang="ts" setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const isScrolled = ref<boolean>(false);
    const isMenuOpen = ref<boolean>(false);

    const handleScroll = (): void => {
        isScrolled.value = window.scrollY > 50;
    };

    const toggleMenu = (): void => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const scrollTo = (id: string): void => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 50,
                behavior: "smooth"
            });
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        function setViewportHeight() {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        }
        
        setViewportHeight(); // Set awal
        window.addEventListener("resize", setViewportHeight); // Update tiap resize

        return () => window.removeEventListener("resize", setViewportHeight);
    });

    

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<style scoped>
    :root {
        --vh: 1vh;
    }
    a {
        text-decoration: none;
    }
    .navbar {
        background-color: transparent;
        position: fixed; 
        top: env(safe-area-inset-top, 0);
        left: 0;
        width: 100vw;
        z-index: 99;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: 30px;
    }

    .scrolled {
        background-color: #ffffff66;
        box-shadow: 0px 4px 4px #00000040;
        backdrop-filter: blur(10px) brightness(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 15px; 
    }

    .navbar-content {
        display: flex;
        width: 100%; 
        max-width: 1200px; 
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
        list-style: none;
        display: flex;
        margin-left: auto;
    }

    .navigation-list li {
        margin: 0 2em; 
    }

    .navigation-list .contact {
        margin: 0 0 0 2em; 
    }

    .navigation-list li a {
        font-family: "Helvetica-Regular", Helvetica;
        font-weight: 400;
        color: #000000;
        font-size: 1.2em; 
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
        width: 25px;
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

    /* Responsive */
    @media (max-width: 768px) { 
    .navbar {
        max-width: 768px;
        width: 100vw;
        padding: 10px;
    }
    .hamburger-menu {
        display: flex;
    }
    .tittle-navbar {
        z-index: 100;
    }
    .navbar-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center; 
        padding: 10px;
        box-sizing: border-box;
    }
    .navigation-list {
        display: none; 
        flex-direction: column;
        position: absolute;
        top: 60px; 
        left: 0;
        width: 100%;
        background-color: #ffffff66; 
        box-shadow: 0px 4px 4px #00000040;
        text-align: center;
        padding: 10px 0;
        backdrop-filter: blur(10px) brightness(100%);
        -webkit-backdrop-filter: blur(10px) brightness(100%);
    }
    .navigation-list.open {
        display: flex; 
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
        font-size: 1.2em; 
    }
    }

    @media (max-width: 480px) { 
        .tittle-navbar {
            font-size: 1.2em;
        }
    }
</style>