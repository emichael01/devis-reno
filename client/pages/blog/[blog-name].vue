<template>
    <section class="py-16">
        <div class="container">
            <h1 class="text-4xl font-bold mb-6">{{ blog.title }}</h1>
            <img :src="blog.image" alt="Blog Image" class="w-full h-80 object-cover rounded-lg mb-6">
            <p class="text-lg">{{ blog.content }}</p>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const blogData = {
    'cuisine-moderne': {
        title: '10 idées de rénovation pour une cuisine moderne et fonctionnelle',
        image: 'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/08/Kitchen-decor-ideas-2023-Drew-F-1024x753.jpg',
        content: 'Voici quelques idées pour rénover votre cuisine de manière moderne et fonctionnelle...',
    },
    // Add other blogs here
};

const blog = blogData[route.params['blog-name']] || {
    title: 'Blog Introuvable',
    image: '',
    content: 'Le blog demandé n’existe pas.',
};
</script>
