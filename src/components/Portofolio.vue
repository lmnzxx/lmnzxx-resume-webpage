<template>
    <section id="portofolio" class="portofolio-section">
        <h2 class="section-title">PORTOFOLIO</h2>
        <swiper
            class="portofolio-swiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :navigation="isDesktop"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
        >
            <swiper-slide v-for="(item, index) in projects" :key="index">
                <div class="card">
                    <img :src="item.image" :alt="item.title" class="card-img" />
                    <div class="card-content">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from "vue";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Navigation, Pagination, Autoplay } from "swiper/modules";
    import "../../node_modules/swiper/swiper-bundle.css";
    import "../../node_modules/swiper/modules/pagination.css"
    import "../../node_modules/swiper/modules/navigation.css"

    const modules = [Navigation, Pagination, Autoplay];

    interface Project {
        title: string;
        description: string;
        image: string;
    }

    const projects = ref<Project[]>([
        {
            title: "Car Rental Booking Order Website",
            description: "A web-based car rental booking system built with PHP. It allows customers to search, book, and manage car rentals online while helping rental owners manage vehicle data and transactions efficiently.",
            image: "/img/project1.png",
        },
        {
            title: "Project 2",
            description: "Deskripsi singkat tentang project ini.",
            image: "/img/project1.png",
        },
        {
            title: "Project 3",
            description: "Deskripsi singkat tentang project ini.",
            image: "/img/project1.png",
        },
    ]);


    const isDesktop = ref(window.innerWidth >= 768);

    const updateScreenSize = () => {
        isDesktop.value = window.innerWidth >= 768;
    };

    onMounted(() => window.addEventListener("resize", updateScreenSize));
    onUnmounted(() => window.removeEventListener("resize", updateScreenSize));
</script>

<style scoped>
    .portofolio-section {
        min-height: 100vh;
        text-align: center;
        padding: 64px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .section-title {
        font-size: 2rem;
        font-family: "Helvetica-Regular", Helvetica;
        font-weight: 600;
        margin: 0;
        padding-bottom: 50px;
    }

    .portofolio-swiper {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
    }

    .card {
        width: 100%; 
        max-width: 1200px;
        height: 640px; 
        margin: auto; 
        background: #fff;
        overflow: hidden;
        text-align: center;
    }

    .card-img {
        object-position: top;
        width: 100%;
        max-height: 480px;
        object-fit: cover;
    }

    .card-content {
        padding: 20px;
    }

    .card-content h3 {
        margin: 10px 0;
        font-size: 1.5rem;
        font-family: "Helvetica-Regular", Helvetica;
        font-weight: 600;
    }

    .card-content p {
        color: #555;
        font-family: "Helvetica-Regular", Helvetica;
        font-weight: 400;
    }
</style>
