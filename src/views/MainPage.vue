<!--
 * @Author: shufei.han
 * @Date: 2024-08-20 11:01:58
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-20 18:04:31
 * @FilePath: \qiankun\qiankun-app-practice\src\views\MainPage.vue
 * @Description: 
-->
<template>
  <div class="main-page full-height">
    <div class="flex-start flex-column">
        <h1>This is main page</h1>
        <h1>
            <span>Lets's learn </span>
            <span class="title-micro">Micro App</span>
        </h1>
    </div>
    <h1 style="margin: 32px 0;">App List: </h1>
    <ul>
        <li v-for="item of SubAppList" :key="item.key" @click="navigateTo(item.config)">
            <span>{{ item.config.label + ": " }}</span>
            <span>{{ item.config.description }}</span>
        </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { SubAppConfig, SubAppList } from '@/models/base.model';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (config: SubAppConfig) => {
    router.push({
        path: config.routerPath,
    })
}
</script>

<style lang="scss" scoped>
.main-page {
    color: var(--primary);
    padding: 24px;
    h1 {
        font-size: 24px;
        .title-micro {
            font-size: 32px;
            font-weight: 900;
        }
    }
    ul {
        li {
            font-size: 24px;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
