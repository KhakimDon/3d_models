<template>
    <div>
        <main class="min-h-[100vh] pt-[50px]">
            <div class="filter"></div>
            <div class="mx-auto flex flex-wrap gap-[30px] max-w-7xl py-6 sm:px-6 lg:px-8">
                <div v-for="item of store.models" :key="item.id" class="card z-[10] w-96 glass">
                    <figure>
                        <VueMagnifier :src="item.image" width="500"/>
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">{{ item.title  }}</h2>
                        <p class="text-white">{{ item.description }}</p>
                        <div class="card-actions justify-end">
                            <button @click="this.$router.push('/model/' + item._id)" class="btn btn-secondary">View 3D
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { useModels } from '../stores/models';
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'
    
const store = useModels()
</script>

<style></style>