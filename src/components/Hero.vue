<template>
    <section class="home" id="home">
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
    </section>
</template>


<script lang="ts" setup>
    import { ref, onMounted } from "vue";

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
        position: relative;
        width: 100%;
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
        transform: translateY(-50%);
        right: 0;
        height: auto;
    }

    .text-content {
        position: absolute;
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
        .home {
            max-width: 768px;
        }
        .bubble1 {
            width: 50%;
            align-items: center !important;
        }
        .text-content {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
        }
    }
</style>

