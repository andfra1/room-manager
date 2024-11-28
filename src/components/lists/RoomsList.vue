<script setup lang="ts">
import { mounted, ref } from 'vue'
import ListComponentInfo from '@/components/lists/lists-components/ListComponentInfo.vue'
import ListHeader from "@/components/lists/lists-components/ListHeader.vue";
import ListLocations from "@/components/lists/lists-components/ListLocatons.vue";
import ListAddItem from '@/components/lists/lists-components/ListAddItem.vue'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue'

const componentPrefix = 'room';
const newItemName = ref('')

const coreList = ref([
  {
    id: 'roomid1231241424124',
    displayName: 'room #1',
    unicodeName: 'room_1',
    equipment: ['sorted', 'rooms'],
  },
  {
    id: 'roomid12424124',
    displayName: 'room #2',
    unicodeName: 'room_2',
    equipment: ['sorted', 'rooms', 'pattern', 'theme', 'pattern'],
  },
  {
    id: 'roomid131241424124',
    displayName: 'room #3',
    unicodeName: 'room_4',
    equipment: ['sorted', 'from', 'theme', 'pattern', 'from', 'theme',  'from', 'theme',  'from', 'theme',  'from', 'theme', 'pattern'],
  },
  {
    id: 'roomid13124142224124',
    displayName: 'room #6',
    unicodeName: 'room_6',
    equipment: ['sorted', 'from', 'theme',   'theme', 'pattern'],
  },
  {
    id: 'roomid131241424124',
    displayName: 'room #5',
    unicodeName: 'room_5',
    equipment: ['sorted', 'from', 'theme', 'from', 'theme', 'pattern'],
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
  <ListComponentInfo component-name="RoomsList.vue"/>

  <Breadcrumbs :to="['/','building/','level/']" order="3" name="Rooms list"/>
  <ListHeader listHeader="Rooms list"/>
  <ListAddItem
    :coreList="coreList"
    :prefix="componentPrefix"
    v-model="newItemName"
  />
  <ListLocations
    :core-list="(coreList && coreList.length > 0) ? coreList : []"
    :prefix="componentPrefix"
    list-location="rooms"
    list-subordinate="equipment"
    list-route-to="/building/level/room/"
  />
</template>

