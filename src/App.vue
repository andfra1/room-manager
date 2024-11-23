<script setup lang="ts">
import '../node_modules/bootstrap/scss/bootstrap.scss'
import {RouterView} from 'vue-router'
import Header from '@/components/core/Header.vue'
import Footer from "@/components/core/Footer.vue";
</script>

<template>
  <Header/>
  <main class="flex">
    <RouterView/>
  </main>
  <Footer/>
</template>

<style scoped>
main {
  padding: 20px;
  border: 1px solid #333;
  margin: 2rem 0;
  position: relative;
  min-height: calc(100vh - 300px);
}

.flex {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
