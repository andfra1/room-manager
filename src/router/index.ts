import { createRouter, createWebHistory } from 'vue-router'
import WelcomeScreen from '@/views/WelcomeScreen.vue'
import Buildings from '@/views/Buildings.vue'
import Levels from '@/views/Levels.vue'
import Rooms from '@/views/Rooms.vue'
import Help from '@/views/Help.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeScreen,
    },
    {
      path: '/building/',
      name: 'buildings',
      component: Buildings,
    },
    {
      path: '/building/level/',
      name: 'levels',
      component: Levels,
    },
    {
      path: '/building/level/room/',
      name: 'rooms',
      component: Rooms,
    },
    {
      path: '/help/',
      name: 'help',
      component: Help,
    },
  ],
})

export default router
