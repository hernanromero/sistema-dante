<template>
  
  <div id="app">

    <SidebarMenu/>
    
      <div class="content">
        <router-view/>
      </div>

  </div>

 
</template>

<script setup>
import SidebarMenu from './components/SidebarMenu.vue';

</script>

<style>
#app {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(233, 233, 233);
    height: 100vh;
    width: 100vw;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 15px 6px 6px 6px;
    width: 95%;
    padding: 20px;

}

</style>
