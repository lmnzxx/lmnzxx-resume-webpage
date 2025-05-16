<template>
    <div class="navbar" :class="{ scrolled: isScrolled }" :style="navbarStyle">
        <div class="navbar-content">
            <a class="tittle-navbar" :class="{ active: isMenuOpen }" href="#home" @click.prevent="scrollTo('home')">lmnzxx</a>
            <div class="hamburger-menu" :class="{ open: isMenuOpen }" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul :class="['navigation-list', { active: isMenuVisible }]">
                <li><router-link :to="{ path: '/', hash: '#home' }" @click.prevent="handleNavClick('home')">Home</router-link></li>
                <li><router-link :to="{ path: '/', hash: '#about' }" @click.prevent="handleNavClick('about')">About</router-link></li>
                <li><router-link :to="{ path: '/', hash: '#portofolio' }" @click.prevent="handleNavClick('portofolio')">Portofolio</router-link></li>
                <li><router-link :to="{ path: '/', hash: '#contact' }" @click.prevent="handleNavClick('contact')">Contact</router-link></li>
                <li><router-link to="/blog" @click.prevent="handleNavClick()">Blog</router-link></li>
            </ul>
            <div class="navlist-bg" :class="{ active: isMenuVisible }" @click="closeMenu"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false); 
const isMenuVisible = ref(false); 

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
    };

const scrollTo = (id: string) => {
const element = document.getElementById(id);
if (element) {
    window.scrollTo({
    top: element.offsetTop - 50,
    behavior: 'smooth'
    });
}
};

const handleNavClick = (id?: string) => {
    if (id) scrollTo(id);
    closeMenu();
};

const toggleMenu = () => {
    if (!isMenuOpen.value) {
        isMenuOpen.value = true;
        isMenuVisible.value = true;
    } else {
        isMenuOpen.value = false;
        setTimeout(() => {
        isMenuVisible.value = false;
        }, 500);
    }
};

const closeMenu = () => {
    isMenuOpen.value = false;
    setTimeout(() => {
        isMenuVisible.value = false;
    }, 500);
};

const navbarStyle = computed(() => {
    if (isScrolled.value && isMenuOpen.value) {
        return { backdropFilter: 'none' };
    } else if (isScrolled.value && !isMenuOpen.value) {
        return { backdropFilter: 'blur(10px)' };
    } else {
        return {};
    }
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    const setViewportHeight = () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        };
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    });

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    });
</script>
