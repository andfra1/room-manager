<script setup lang="ts">
import {ref} from 'vue'
import ListComponentInfo from '@/components/lists/lists-components/ListComponentInfo.vue'
import ListHeader from "@/components/lists/lists-components/ListHeader.vue";
import ListLocations from "@/components/lists/lists-components/ListLocatons.vue";
import ListAddItem from '@/components/lists/lists-components/ListAddItem.vue'

const newItemName = ref('')

const coreList = ref([
  {
    id: 'levelid1231241424124',
    displayName: 'level #1',
    unicodeName: 'level_1',
    equipment: ['sorted', 'rooms'],
  },
  {
    id: 'levelid12424124',
    displayName: 'level #2',
    unicodeName: 'level_2',
    equipment: ['sorted', 'rooms', 'pattern', 'from', 'theme', 'pattern'],
  },
  {
    id: 'levelid131241424124',
    displayName: 'level #3',
    unicodeName: 'level_4',
    equipment: ['sorted', 'from', 'theme', 'pattern', 'from', 'theme', 'pattern'],
  },
  {
    id: 'levelid13124142224124',
    displayName: 'level #6',
    unicodeName: 'level_6',
    equipment: ['sorted', 'from', 'theme', 'theme', 'theme', 'pattern'],
  },
  {
    id: 'levelid131241424124',
    displayName: 'level #5',
    unicodeName: 'level_5',
    equipment: ['sorted', 'from', 'theme', 'pattern', 'from', 'theme', 'pattern', 'from', 'theme', 'pattern'],
  },
])
</script>

<template>
  <ListComponentInfo component-name="LevelsList.vue"/>
  <ListHeader list-header="Levels list"/>
  <ListAddItem
    :coreList="coreList"
    v-model="newItemName"
    prefix="lvl"
  />
  <ListLocations
    :list-parameters="(coreList && coreList.length > 0) ? coreList : []"
    list-location="levels"
    list-subordinate="equipment"
    list-route-to="/building/level/room"
  />
</template>
