<script setup lang="ts">
import ListLocations from "@/components/lists/lists-components/ListLocatons.vue";
const props = defineProps([
  'listParameters',
  'listSubordinate',
  'listLocation',
  'listRouteTo',
])
</script>

<template>
  <aside>
    <ListLocations
      :list-parameters="props.listParameters"
      :list-location="props.listLocation"
      :list-subordinate="props.listSubordinate"
      :list-route-to="props.listRouteTo"
    />
  </aside>
</template>

<style>
aside {
  flex: 0 0 320px;
}
</style>
