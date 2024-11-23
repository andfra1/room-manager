<script setup lang="ts">
import { ref } from 'vue'

const newItemName = ref('')

const props = defineProps([
    'coreList',
    'prefix'
  ])

const addNewListItem = (coreList: [], prefix: string, newItemName: string) => {
  newItemName = newItemName.toLowerCase()
  const objTemplate = {
    id: idGenerator(coreList, prefix),
    displayName: newItemName || 'b-' + (coreList.length + 1),
    unicodeName:
      newItemName.length > 0 ? unicodeGenerator(newItemName) : 'uid-' + (coreList.length + 1),
    equipment: [],
  }
  newItemName = '';
  coreList.push(objTemplate)
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

  // id
  for (let i = 0; i < 10; i++) {
    makeAnID.push(alphanumeral[Math.floor(Math.random() * alphanumeral.length)])
  }

  // hash
  for (let i = 0; i < 4; i++) {
    someKindOfHash.push(makeAnID[Math.floor(Math.random() * makeAnID.length)])
  }

  let idIs = prefix ? prefix + '-' : 'nie-ustawiam-prefixu-bo-jeste-ponczkie-'
  idIs = idIs + 'id-0' + coreList.length + '-' + someKindOfHash.join('') + '-' + makeAnID.join('')

  return idIs
}
</script>

<template>
  <div class="input-group w-full mb-3">
    <div class="form-floating">
    <input id="listAddItem"
           type="text"
           class="form-control"
           max="64"
           placeholder="np. World Trade Center"
           v-model="newItemName"
    />
      <label for="listAddItem"
             class="form-label">
        Podaj nazwę:
      </label>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      @click="addNewListItem(props.coreList, props.prefix, newItemName)"
    >
      dodaj
    </button>
  </div>
</template>
