<template>
    <div class="home" :class="{ scrolled: isScrolled}" id="home">
        <div class="overlap-group-2">
            <div class="wrapper-content">
                <img class="bubble1" src="../assets/vector.svg">
                <div class="text-content">
                    <div class="hello">Hello there, I am</div>
                    <div class="names">Heryandi Pradana</div>
                    <div class="aka">also known as lmnzxx</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted, onUnmounted } from "vue";

    export default defineComponent({
        setup() {
            const isScrolled = ref(false);

            const handleScroll = () => {
                isScrolled.value = window.scrollY > 50;
            };
            onMounted(() => {
                window.addEventListener('scroll', handleScroll);
            });

            onUnmounted(() => {
                window.removeEventListener('scroll', handleScroll);
            });

            return { isScrolled };
        }
    })
</script>

<style scoped>
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 960px;
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
        position: relative;
        width: 100%;
        max-width: 1200px;
        display: flex;
    }

    .wrapper-content {
        padding: 30px; /* Add padding here */
        width: 100%; /* Important to fill parent */
        box-sizing: border-box; /* Include padding in width calculation */
        display: flex;
    }

    .bubble1 {
        position: absolute;
        top: 0;
        transform: translateY(-50%);
        right: 0;
        max-width: 70%; /* Adjust as needed */
        height: auto;
    }

    .text-content {
        position: absolute;
        top: -50%;
        transform: translateY(-50%);
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
        .overlap-group-2 {
            flex-direction: column;
            align-items: center;
        }
        .bubble1 {
            position: relative;
            right: 0;
            max-width: 80%;
            margin-bottom: 20px;
        }
        .text-content {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            text-align: center;
        }
    }
</style>

