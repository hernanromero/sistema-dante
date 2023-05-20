<template>
    <h1>Alumno Detail</h1>
    <div class="post-container">
        <div class="post-card">
            <h3>{{ post.name }}</h3>
            <p>{{ post.website }}</p>
        </div>
    
        <router-link :to="{name: 'home'}" > Volver</router-link>
    </div>
    </template>
    
    <script setup>
    import PostService from '@/server/AlumnosServer';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    
    const service = new PostService()
    const post = service.getPost()
    
    onMounted(async()=>{
        const route = useRoute()
        let elm = route.params.id
        await service.fetchById(elm)
    })
    
    
    </script>
    
    <style scoped>
    
    </style>