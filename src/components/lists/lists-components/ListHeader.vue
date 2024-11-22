<script setup lang="ts">
const props = defineProps([
  'listHeader'
])
</script>

<template>
  <h1>
    {{ props.listHeader }}
  </h1>
</template>

<style>
h1 {
  margin: 1rem;
  flex: 0 0 100%;
}
</style>
