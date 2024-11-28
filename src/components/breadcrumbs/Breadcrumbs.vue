<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['to', 'name'])
</script>

<template>
  <nav>
    <span v-for="(item, index) in props.to" :key="item">
      <RouterLink :to="'/' + (index < 2 ? item : (props.to[index-1] + item))">
        {{item}}
      </RouterLink>
    </span>
  </nav>
</template>

<style scoped>

</style>
