<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps([
  'listParameters',
  'listSubordinate',
  'listLocation',
  'listRouteTo',
])
</script>

<template>
  <ul>
    <li v-for="(item, index) in props.listParameters"
        :data-building-id="item.id"
        :key="item.id"
    >
      <RouterLink :to="props.listRouteTo">
        {{ index + 1 }} | name: {{ item.displayName }}
      </RouterLink>
      | {{ props.listSubordinate }}: {{ item[props.listSubordinate].length }}
    </li>
  </ul>
</template>

<style>
ul {
  flex-direction: column;
  flex: 1 0 auto;
}
</style>
