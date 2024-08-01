/*
 * @Author: shufei.han
 * @Date: 2024-08-01 09:38:34
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-01 15:18:45
 * @FilePath: \main-app-vue\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/layout/MainLayout.vue"),
      redirect: "/vue",
      children: [
        {
          path: "/vue",
          name: "vue",
          component: () => import("@/views/VueApp.vue"),
        },
        {
          path: "/react",
          name: "react",
          component: () => import("@/views/ReactApp.vue"),
        },
        {
          path: "/native",
          name: "native",
          component: () => import("@/views/NativeApp.vue"),
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
