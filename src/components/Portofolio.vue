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
            :auatoheight="true"
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
    import { ref, onMounted, onUnmounted, nextTick } from "vue";
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
            description: "A web-based car rental booking system built with PHP. It allows customers to search, book, and manage car rentals online while helping rental owners manage vehicle data and transactions efficiently.",
            image: "/img/project1.png",
        },
        {
            title: "Project 3",
            description: "A web-based car rental booking system built with PHP. It allows customers to search, book, and manage car rentals online while helping rental owners manage vehicle data and transactions efficiently.",
            image: "/img/project1.png",
        },
    ]);

    const isDesktop = ref(window.innerWidth >= 768);
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

        const equalizeSlideHeight = () => {
        nextTick(() => {
            const slides = document.querySelectorAll(".swiper-slide .card");
            const cardContents = document.querySelectorAll(".card-content");
            const images = document.querySelectorAll(".card-img");
            let imagesLoaded = 0;

            const updateHeight = () => {
                let maxCardHeight = 0;
                let maxContentHeight = 0;

                slides.forEach((slide) => {
                    (slide as HTMLElement).style.height = "auto";
                });
                cardContents.forEach((content) => {
                    (content as HTMLElement).style.height = "auto";
                });

                slides.forEach((slide) => {
                    maxCardHeight = Math.max(maxCardHeight, slide.scrollHeight);
                });
                cardContents.forEach((content) => {
                    maxContentHeight = Math.max(maxContentHeight, content.scrollHeight);
                });

                slides.forEach((slide) => {
                    (slide as HTMLElement).style.height = `${maxCardHeight}px`;
                });
                cardContents.forEach((content) => {
                    (content as HTMLElement).style.height = `${maxContentHeight}px`;
                });
            };

            images.forEach((img) => {
                if ((img as HTMLImageElement).complete) {
                    imagesLoaded++;
                } else {
                    img.addEventListener("load", () => {
                        imagesLoaded++;
                        if (imagesLoaded === images.length) {
                            updateHeight();
                        }
                    });
                }
            });

            if (imagesLoaded === images.length) {
                updateHeight();
            }
        });
    };

    const handleResize = () => {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            isDesktop.value = window.innerWidth >= 768;
            equalizeSlideHeight();
        }, 200);
    };

    onMounted(() => {
        window.addEventListener("resize", handleResize);
        equalizeSlideHeight();
    });

    onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
    });

</script>

<style scoped>
    .portofolio-section {
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
        min-height: 300px;
    }

    .card {
        width: 100%; 
        max-width: 1200px;
        background: #fff;
        overflow: hidden;
        text-align: center;
        display: flex;
        flex-direction: column;
        height: auto !important;
    }

    .card-img {
        object-position: top;
        width: 100%;
        max-height: 480px;
        object-fit: cover;
    }

    .card-content {
        padding: 20px;
        flex-grow: 1;
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

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: stretch;
    }

    @media screen and (max-width: 768px) {
        .section-title {
            font-size: 1.5rem;
        }
    }
</style>
