<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useModels } from './stores/models';
import './style.css'

const store = useModels()
  

</script>

<template>
  <div>
    <div class="min-h-full">
      <header class="bg-[#333] bordershd">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 textneon">3D models</h1>
        </div>
      </header>
    </div>
    <RouterView />
  </div>

</template>

<style>
.bordershd{
  border-bottom: 1px solid rgb(255, 0, 234);
  box-shadow: 0 0 20px rgb(255, 0, 234);
}
.textneon{
  text-shadow: 0 0 20px rgb(255, 0, 234);
  color: rgb(255, 0, 234);
}
#app {
  background: #333;
}
body{
    height: 100vh;
    background: #333;
}
</style>
