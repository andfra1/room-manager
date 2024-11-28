<script setup lang="ts">
import { computed, ref } from 'vue'
import ListComponentInfo from '@/components/lists/lists-components/ListComponentInfo.vue'
import ListHeader from '@/components/lists/lists-components/ListHeader.vue'
import ListAddItem from '@/components/lists/lists-components/ListAddItem.vue'
import ListLocations from '@/components/lists/lists-components/ListLocatons.vue'
import AsideMenuForList from '@/components/lists/AsideMenuForList.vue'
import LevelsList from '@/components/lists/LevelsList.vue'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue'

const componentPrefix = 'bldg'
const newItemName = ref('')

const coreList = ref([
  {
    id: 'someid23234',
    displayName: 'building nr1',
    unicodeName: 'building_nr1',
    equipment: ['sorted', 'levels', 'from', 'theme', 'pattern'],
  },
  {
    id: 'someid3333333',
    displayName: 'building nr2',
    unicodeName: 'building_nr2',
    equipment: ['sorted', 'levels', 'pattern'],
  },
  {
    id: 'someid3333355',
    displayName: 'building nr3',
    unicodeName: 'building_nr3',
    equipment: ['sorted', 'from', 'theme', 'pattern'],
  },
])

const checkLocalcStorage = (prefix: string) => {
  const getItem = localStorage.getItem('rmApp-' + prefix)
  if (getItem && JSON.parse(getItem).length > 0) {
    coreList.value = JSON.parse(getItem)
  }
}

mounted: {
  checkLocalcStorage(componentPrefix)
}
</script>

<template>
  <!--  start dev-->
  <ListComponentInfo component-name="BuildingsList.vue" />
  <!--  end dev-->
  <Breadcrumbs :to="['/']" name="Buildings list"/>
  <ListHeader listHeader="Buildings list" />
  <ListAddItem
    :coreList="!!coreList && coreList.length > 0 ? coreList : []"
    :prefix="componentPrefix"
    v-model="newItemName"
  />
  <ListLocations
    :core-list="!!coreList && coreList.length > 0 ? coreList : []"
    :prefix="componentPrefix"
    :bldg-id="Object.keys(coreList)"
    list-location="buildings"
    list-subordinate="equipment"
    list-route-to="/building/level/"
  />
  <!--  <AsideMenuForList-->
  <!--    :listParameters="['sdfsf','sdfsdf']"-->
  <!--    list-location="room"-->
  <!--    list-subordinate="rooms"-->
  <!--    list-route-to="/building/level/room/"-->
  <!--  />-->
</template>
