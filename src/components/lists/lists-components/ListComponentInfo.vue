<script setup lang="ts">
const props = defineProps([
  'componentName'
])
</script>

<template>
  <span class="infooo">
    component: {{ props.componentName }}
  </span>
</template>

<style>
span.infooo {
  display: block;
  font-size: 10px;
  color: #ccc;
  position: absolute;
  padding: 2px 10px;
  top: 0;
  left: 0;
}
</style>
