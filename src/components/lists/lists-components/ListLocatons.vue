<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const props = defineProps([
  'listParameters',
  'listSubordinate',
  'listLocation',
  'listRouteTo',
])

const listParameters = ref(props.listParameters)

const removeListItem = (item: []) => {
  listParameters.value.splice(listParameters.value.indexOf(item),1)
}
</script>

<template>
  <ul class="list-group container-fluid p-0">
    <li v-for="(item, index) in listParameters"
        :data-building-id="item.id"
        :key="item.id"
        class="list-group-item d-flex align-items-center justify-content-between"
    >
      <div>
      {{ index + 1 }} |
      <RouterLink :to="props.listRouteTo">
        name: {{ item.displayName }}
      </RouterLink>
         | {{ props.listSubordinate }}: {{ item[props.listSubordinate].length }}
</div>
      <button
        type="submit"
        class="btn btn-danger"
        @click="removeListItem(item)"
      >
        usuń
      </button>
    </li>
  </ul>
</template>
