<template>
    <section class="home" id="home">
        <div class="overlap-group-2">
            <div class="wrapper-content">
                <img class="bubble1" src="../assets/vector.svg" v-motion="animationProps1"/>
                <div class="text-content" v-motion="animationProps2">
                    <div class="hello">Hello there, I am</div>
                    <div class="names">Heryandi Pradana</div>
                    <div class="aka">also known as lmnzxx</div>
                </div>
            </div>
        </div>
    </section>
</template>


<script lang="ts" setup>
    import { ref, onMounted, computed } from "vue";
    import { useWindowSize } from "@vueuse/core";

    const { width } = useWindowSize(); // Ambil ukuran layar

    const animationProps1 = computed(() => {
        if (width.value < 480) {
            return { initial: { x: 100, y: '-20vh', opacity: 0 }, enter: { x: 0, y: '-20vh', opacity: 1, transition: { duration: 1000 } } };
        } else if (width.value < 768) {
            return { initial: { x: 200, y: '-25vh',  opacity: 0 }, enter: { x: 0, y: '-25vh', opacity: 1, transition: { duration: 1000 } } };
        } else if (width.value < 1080) {
            return { initial: { x: 200, y: '-25vh', opacity: 0 }, enter: { x: 0, y: '-25vh', opacity: 1, transition: { duration: 1000} } };
        } else {
            return { initial: { x: 200, y: '-35vh', opacity: 0 }, enter: { x: 0, y: '-35vh', opacity: 1, transition: { duration: 1000 } } };
        }
    });

    const animationProps2 = computed(() => {
        if (width.value < 480) {
            return { initial: { x: -30, opacity: 0 }, enter: { x: 0, opacity: 1, transition: { duration: 1000 } } };
        } else if (width.value < 768) {
            return { initial: { x: -200, opacity: 0 }, enter: { x: 0, opacity: 1, transition: { duration: 1000 } } };
        } else if (width.value < 1080) {
            return { initial: { x: -200, y: '-10vh', opacity: 0 }, enter: { x: 0, y: '-10vh', opacity: 1, transition: { duration: 1000} } };
        } else {
            return { initial: { x: -200, y: '-10vh', opacity: 0 }, enter: { x: 0, y:'-10vh', opacity: 1, transition: { duration: 1000 } } };
        }
    });

    const isScrolled = ref<boolean>(false);

    const handleScroll = (): void => {
        isScrolled.value = window.scrollY > 50;
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
    });
</script>

<style scoped>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100vh;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .home.scrolled {
        padding: 0 10px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .overlap-group-2 {
        position: absolute;
        width: 94%;
        max-width: 1200px;
        display: flex;
    }

    .wrapper-content {
        padding: 30px; 
        width: 100%; 
        box-sizing: border-box; 
        display: flex;
    }

    .bubble1 {
        position: absolute;
        width: 60%;
        right: 0;
        height: auto;
    }

    .text-content {
        position: absolute;
        left: 0;
        z-index: 1;
        text-decoration: none;
    }

    .hello {
        font-family: "Helvetica-Regular", Helvetica;
        font-weight: 400;
        color: #000000;
        font-size: 2.5em;
        white-space: nowrap;
    }

    .names {
        font-family: "Helvetica-Bold", Helvetica;
        font-weight: 700;
        color: #000000;
        font-size: 5em;
        white-space: nowrap;
    }

    .aka {
        font-family: "Helvetica-Regular", Helvetica;
        font-weight: 400;
        color: #000000;
        font-size: 1.5em;
        white-space: nowrap;
    }
    /* Media Queries */
    @media (max-width: 768px) {
        .home {
            max-width: 768px;
            overflow-x: hidden;
        }
        .bubble1 {
            width: 100%;
            transform: translateY(-40%);
            right: -25%;
        }
        .text-content {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
        }
        .wrapper-content {
            max-width: 720px;
        }
        .hello {
            font-size: 1.8em;
        }
        .names {
            font-size: 4.5em;
        }
        .aka {
            font-size: 1.5em;
        }
    }
    @media (max-width: 720px) {
        .home {
            max-width: 720px;
        }
        .bubble1 {
            width: 100%;
            transform: translateY(-40%);
            right: -25%;
        }
        .hello {
            font-size: 1.7em;
        }
        .names {
            font-size: 4em;
        }
        .aka {
            font-size: 1.5em;
        }
    }
    @media (max-width: 640px) {
        .home {
            max-width: 640px;
        }
        .bubble1 {
            width: 125%;
            transform: translateY(-30%);
            right: -25%;
        }
        .hello {
            font-size: 1.7em;
        }
        .names {
            font-size: 4.5em;
            white-space: normal;
        }
        .aka {
            font-size: 1.4em;
        }
    }
    @media (max-width: 420px) {
        .home {
            max-width: 420px;
        }
        .bubble1 {
            width: 175%;
            transform: translateY(-40%);
            right: -60%;
        }
        .hello {
            font-size: 1.5em;
        }
        .names {
            font-size: 3.5em;
            white-space: normal;
        }
        .aka {
            font-size: 1.2em;
        }
    }
</style>