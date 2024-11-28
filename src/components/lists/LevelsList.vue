<script setup lang="ts">
import {mounted, ref} from 'vue'
import ListComponentInfo from '@/components/lists/lists-components/ListComponentInfo.vue'
import ListHeader from "@/components/lists/lists-components/ListHeader.vue";
import ListLocations from "@/components/lists/lists-components/ListLocatons.vue";
import ListAddItem from '@/components/lists/lists-components/ListAddItem.vue'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue'

const componentPrefix = 'lvl';
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

const checkLocalcStorage = (prefix: string) => {
  const getItem = localStorage.getItem('rmApp-' + prefix);
  if (getItem && JSON.parse(getItem).length > 0) {
    coreList.value = JSON.parse(getItem)
  };
};

mounted: {
  checkLocalcStorage(componentPrefix)
};
</script>

<template>
  <ListComponentInfo component-name="LevelsList.vue"/>

  <Breadcrumbs :to="['/','building/']" order="2" name="Levels list"/>
  <ListHeader list-header="Levels list"/>
  <ListAddItem
    :prefix="componentPrefix"
    :coreList="coreList"
    v-model="newItemName"
  />
  <ListLocations
    :core-list="(coreList && coreList.length > 0) ? coreList : []"
    :prefix=componentPrefix
    list-location="levels"
    list-subordinate="equipment"
    list-route-to="/building/level/room"
  />
</template>
