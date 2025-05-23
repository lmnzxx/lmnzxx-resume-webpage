<template>
    <section class="blog" id="blog">
        <div class="container">
            <div class="wrap-blog">
                <div class="blog-list">
                    <router-link
                        :to="`/blog/${post.slug}`"
                        class="blog-card-link"
                        v-for="(post, index) in blogPosts"
                        :key="post.id"
                        >
                        <div class="blog-card animate-card"
                        :style="{ animationDelay: `${index * 150}ms` }"
                        >
                            <h3 class="blog-title">{{ post.title }}</h3>
                            <p class="blog-date">{{ formatDate(post.date) }}</p>
                            <p class="blog-snippet">{{ post.excerpt.slice(0, 200) }}..</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { blogPosts as allPosts } from '../data/blogPosts';
    import { onMounted, ref } from 'vue';

    const blogPosts = ref<typeof allPosts>([]);

    const formatDate = (dateStr: string): string => {
        const date = new Date(dateStr);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    onMounted(() => {
        setTimeout(() => {
            blogPosts.value = allPosts;
        }, 100);
    });
</script>

<style scoped>
.blog {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: flex-start;
    background-color: #f1f1f1;
    padding-top: 100px;
    font-family: "Helvetica-Regular", Helvetica;
}

.container {
    max-width: 1200px;
    width: 100%;
    padding: 60px 40px 40px 40px;
    position: relative;
}

.wrap-blog {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.blog-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.blog-card {
    border: 1px solid #d5d5d5;
    border-radius: 8px;
    padding: 20px;
    transition: box-shadow 0.3s ease;
    background-color: #e1e1e1;
}

.blog-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.blog-card-link:hover .blog-card {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); /* hover effect tetap jalan */
}

.blog-card:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.blog-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    font-family: "Helvetica-Bold", Helvetica;
    margin-bottom: 10px !important;
}

.blog-title:hover {
    color: #727272;
}

.blog-date {
    font-size: 14px;
    color: #888;
    margin-bottom: 8px;
    font-family: "Helvetica-Regular", Helvetica;
}


.blog-snippet {
    margin-top: 10px;
    font-size: 16px;
    color: #595959;
    line-height: 1.6;
    font-family: "Helvetica-Regular", Helvetica;
    text-align: justify;
}

@keyframes fadeSlideUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-card {
    animation: fadeSlideUp 0.6s ease forwards;
    opacity: 0;
}

:deep(.animate-card) {
    animation: fadeSlideUp 0.6s ease forwards;
    opacity: 0;
}

@media (max-width: 768px) {
    .blog-list {
        grid-template-columns: 1fr;
    }
    .container {
        padding: 40px;
    }
}

@media (max-width: 480px) {
    .blog-list {
        grid-template-columns: 1fr;
    }
    .container {
        padding: 20px;
    }
}
</style>
