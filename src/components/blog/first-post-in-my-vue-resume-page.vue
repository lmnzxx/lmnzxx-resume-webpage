<script lang="ts" setup>
    import Navbar from '../Navbar.vue';
    import Footer from '../Footer.vue';
</script>

<template>
    <Navbar />
    <section class="blog-post">
        <div class="container">
            <h1 class="title">First Post in My Vue Resume Page</h1>
            <p class="date">15 Mei 2025</p>
            <div class="content">
                <p>
                Ini adalah blog post pertama saya yang terhubung langsung ke halaman resume berbasis Vue. 
                Di sini saya akan membagikan catatan perjalanan saya dalam membangun portofolio teknikal, termasuk proyek, pemikiran, dan pembelajaran saya.
                </p>
                <p>
                Post ini ditulis menggunakan file .vue secara langsung untuk memberikan fleksibilitas styling dan kontrol penuh atas isi kontennya.
                </p>
            </div>
        </div>
    </section>
    <Footer />
</template>

<style scoped>
    .blog-post {
        min-height: 50vh;
        background-color: #f1f1f1;
        padding-top: 100px;
        padding-bottom: 60px;
        font-family: "Helvetica-Regular", Helvetica;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 40px 40px 40px;
    }
    .title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333;
    }
    .date {
        font-size: 0.9rem;
        color: #888;
        margin-bottom: 20px;
    }
    .content p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #444;
        margin-bottom: 15px;
    }

@media (max-width: 768px) {
        .container {
            padding: 40px;
        }
        .title {
            font-size: 1.5rem;
        }
        .content p {
            font-size: 1rem;
        }
    }

@media (max-width: 480px) {
        .container {
            padding: 20px;
        }
        .title {
            font-size: 1.2rem;
        }
        .content p {
            font-size: 0.9rem;
        }
    }
    </style>
