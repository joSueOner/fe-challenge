import HomeScreen from '@/Screens/Home/HomeScreen.vue'
import NotFoundScreen from '@/Screens/NotFound/NotFoundScreen.vue'
import WaterJugsScreen from '@/Screens/WaterJugs/WaterJugsScreen.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeScreen
    },
    {
      path: '/water-jugs',
      name: 'water-jugs',
      component: WaterJugsScreen
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundScreen,
    }
  ]
})

export default router
