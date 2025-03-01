<template>
    <section id="portofolio" class="portofolio-section">
        <h2 class="section-title">PORTOFOLIO</h2>
        <swiper
            class="portofolio-swiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="20"
            :navigation="true"
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
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Navigation, Pagination, Autoplay } from "swiper/modules";
    import "../../node_modules/swiper/swiper-bundle.css";
    import "../../node_modules/swiper/modules/pagination.css"
    import "../../node_modules/swiper/modules/navigation.css"
    import { ref } from "vue";

    // ✅ Pakai modules
    const modules = [Navigation, Pagination, Autoplay];

    // Definisi tipe data untuk project
    interface Project {
        title: string;
        description: string;
        image: string;
    }

    // Pakai ref untuk projects agar reactive
    const projects = ref<Project[]>([
        {
            title: "Project 1",
            description: "Deskripsi singkat tentang project ini.",
            image: "src/assets/porject1.png",
        },
        {
            title: "Project 2",
            description: "Deskripsi singkat tentang project ini.",
            image: "src/assets/porject1.png",
        },
        {
            title: "Project 3",
            description: "Deskripsi singkat tentang project ini.",
            image: "src/assets/porject1.png",
        },
    ]);
</script>

<style scoped>
    .portofolio-section {
        text-align: center;
        padding: 100px 0;
    }

    .section-title {
        font-size: 2rem;
        font-family: "Helvetica-Regular", Helvetica;
        font-weight: 600;
        margin-bottom: 50px;
    }

    .portofolio-swiper {
        width: 1200px;
        margin: auto;
    }

    .swiper {
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card {
        width: 1200px; 
        max-width: 100%; 
        margin: auto; 
        background: #fff;
        overflow: hidden;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card-img {
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
