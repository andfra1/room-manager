<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['coreList', 'prefix'])

const coreList = props.coreList
const newItemName = ref('')

const addNewListItem = (coreList: [], prefix: string, newItemName: string) => {
  newItemName = newItemName.toLowerCase()
  const objTemplate = {
    id: idGenerator(coreList, prefix),
    displayName: newItemName || 'uid-' + (coreList.length + 1),
    unicodeName:
      newItemName.length > 0 ? unicodeGenerator(newItemName) : 'uid-' + (coreList.length + 1),
    equipment: [],
  }
  coreList.push(objTemplate)
  setLocalStorage(prefix, coreList)
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
  let orderValue = '0'

  // id
  for (let i = 0; i < 10; i++) {
    makeAnID.push(alphanumeral[Math.floor(Math.random() * alphanumeral.length)])
  }

  // hash
  for (let i = 0; i < 4; i++) {
    someKindOfHash.push(makeAnID[Math.floor(Math.random() * makeAnID.length)])
  }

  const numbered = (listData) => {
    const listString = listData.length.toString()
    while (listString.length > (orderValue.length - 1)) {
      orderValue += '0'
    }
      orderValue = orderValue.slice(0, orderValue.length - listString.length)
      return orderValue = orderValue + listString
  }
  let idIs = prefix ? prefix + '-' : 'nie-ustawiam-prefixu-bo-jeste-ponczkie-'
  idIs = idIs + 'id-' + numbered(coreList) + '-' + someKindOfHash.join('') + '-' + makeAnID.join('')

  return idIs
}

const setLocalStorage = (prefix: string, data: object) => {
  localStorage.setItem('rmApp-' + prefix, JSON.stringify(data))
  console.log('rmApp-' + prefix + ': ', JSON.parse(localStorage.getItem('rmApp-' + prefix)))
}
</script>

<template>
  <div class="input-group w-full mb-3">
    <div class="form-floating">
      <input
        id="listAddItem"
        type="text"
        class="form-control"
        max="64"
        placeholder="np. World Trade Center"
        v-model="newItemName"
      />
      <label for="listAddItem" class="form-label"> Podaj nazwę: </label>
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
