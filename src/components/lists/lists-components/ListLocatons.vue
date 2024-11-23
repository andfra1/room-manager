<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import IconTrash2 from '@/components/icons/IconTrash2.vue'

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
        class="btn btn-danger p-2 d-flex align-items-center justify-content-center"
        style="width:32px;height:32px"
        @click="removeListItem(item)"
      >
        <IconTrash2/>
      </button>
    </li>
  </ul>
</template>
