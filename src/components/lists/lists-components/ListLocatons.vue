<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import IconTrash2 from '@/components/icons/IconTrash2.vue'

const props = defineProps([
  'coreList',
  'listSubordinate',
  'listLocation',
  'listRouteTo',
  'prefix'
])

const listParameters = ref(props.coreList)

const setLocalStorage = (prefix: string, data: object) => {
  localStorage.setItem('rmApp-' + prefix, JSON.stringify(data))
}

const removeListItem = (item: [], prefix: string) => {
  listParameters.value.splice(listParameters.value.indexOf(item),1)
  setLocalStorage(prefix, listParameters.value)
}
</script>

<template>
  <ul class="container-fluid p-0">
    <li v-for="(item, index) in listParameters"
        :data-id="item.id"
        :key="item.id"
        class="bg-light d-flex align-items-center justify-content-between w-full my-1 rounded-3 overflow-hidden" role="group">
      <div class="w-full py-1 px-3">
        {{ index + 1 }} |
        <RouterLink :to="props.listRouteTo">
          name: {{ item.displayName }}
        </RouterLink>
           | {{ props.listSubordinate }}: {{ item[props.listSubordinate].length }}
      </div>
      <button
        type="submit"
        class="btn btn-danger p-2 d-flex align-items-center justify-content-center"
        style="width:36px;height:36px"
        @click="removeListItem(item, props.prefix)"
      >
        <IconTrash2/>
      </button>
    </li>
  </ul>
</template>
