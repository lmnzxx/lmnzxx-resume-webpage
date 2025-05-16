<template>
    <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.excerpt }}</p>
    </div>
    <div v-else>
        <p>Artikel tidak ditemukan.</p>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { blogPosts } from '../data/blogPosts';

const route = useRoute();
const slug = route.params.slug as string;

const post = computed(() =>
    blogPosts.find((p) => p.slug === slug)
);
</script>
