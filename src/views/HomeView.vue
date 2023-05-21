<template>

<div class="container" style="width: 90%;">

  <h2 class="mt-2 text-center">Listado de alumnos</h2>


  <div class="input-group mb-3">
  <input type="search" class="form-control" v-model='filter' placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-primary" type="button" id="button-addon2">Limpiar</button>
</div>

 

       
      
  <div class="container">
    <div class="table-wrapper-scroll-y my-scrollbar" >
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Documento</th>
                    <th scope="col">Categoría</th>

                </tr>
            </thead>
            <tbody>

               <tr v-for="post in posts" :key="post.id">
                    <td scope="row">
                      <router-link :to="{name:'alumno', params:{id: post.id}}" >
                      {{ post.name}}
                    </router-link>
                    </td>   
                    <td scope="row">{{ post.address.zipcode}}</td>   
                    <td scope="row">{{ post.website}}</td>  
                </tr>

            </tbody>
        </table>
    </div>
    
  </div>
</div>

  </template>
  
  <script setup>
  import AlumnosServer from '@/server/AlumnosServer';
  import { onMounted } from 'vue';
  
      const service = new AlumnosServer()
      const posts = service.getPosts()
  
      onMounted( async () => {
          await service.fetchAll()
      })

      
      
  </script>
<style>
.my-scrollbar {
position: relative;
height: 500px;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
}
</style>