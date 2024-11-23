<script setup lang="ts">
import { ref } from 'vue'

const newItemName = ref('')

const props = defineProps(['coreList', 'prefix'])

const addNewListItem = (coreList: [], prefix: string, newItemName: string) => {
  newItemName = newItemName.toLowerCase()
  const objTemplate = {
    id: idGenerator(coreList, prefix),
    displayName: newItemName || 'b-' + (coreList.length + 1),
    unicodeName:
      newItemName.length > 0 ? unicodeGenerator(newItemName) : 'b-' + (coreList.length + 1),
    equipment: [],
  }
  coreList.push(objTemplate)
  // ustalenie szablonu zapisu + zmienne
  //   zapis do local.storage

  console.log(objTemplate)
}

const unicodeGenerator = (writeSomething: string) => {
  const unicodePattern = new RegExp('[^a-zA-Z-0-9_]', 'gm')
  return writeSomething.replace(unicodePattern, '')
}

const idGenerator = (coreList: [], prefix: string) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const numeral = '0123456789'.split('')
  const alphanumeral = alpha.concat(numeral)
  const makeAnID = []
  const someKindOfHash = []

  for (let i = 0; i < 10; i++) {
    makeAnID.push(alphanumeral[Math.floor(Math.random() * alphanumeral.length)])
  }

  for (let i = 0; i < 4; i++) {
    someKindOfHash.push(makeAnID[Math.floor(Math.random() * makeAnID.length)])
  }

  let idIs = prefix ? prefix + '-' : 'nie-ustawiam-prefixu-bo-jeste-ponczkie-'
  idIs = idIs + 'id-0' + coreList.length + '-' + someKindOfHash.join('') + '-' + makeAnID.join('')

  return idIs
}
</script>

<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" max="64" v-model="newItemName" />
    <button
      type="submit"
      class="btn btn-primary"
      @click="addNewListItem(coreList, 'bldg', newItemName)"
    >
      dodaj
    </button>
  </div>
</template>
