<!--
 * @Author: shufei.han
 * @Date: 2024-08-01 14:17:58
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-01 15:14:44
 * @FilePath: \main-app-vue\src\views\layout\LayoutMenu.vue
 * @Description: 
-->
<template>
    <div class="full-height flex flex-column items-start">
        <a-menu v-model:selected-keys="activeKeys" :theme="theme" :items="menus" class="flex-1 full-width" @click="handleClick"></a-menu>
    </div>
</template>

<script setup lang="ts">
import type { ItemType, MenuTheme } from 'ant-design-vue';
import type { MenuClickEventHandler } from 'ant-design-vue/es/menu/src/interface';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { SubAppList, SubAppConfig } from '@/models/base.model';
import { watch } from 'vue';

defineProps<{ theme: MenuTheme }>()
const router = useRouter()
const route = useRoute()

const activeKeys = ref([])
const menus: ItemType[] = SubAppList.map(app => ({ key: app.config.routerPath, label: app.config.label, ...app.config}))

watch(() => route.path, () => {
    console.log('watch');
    
    const matchedRoute = menus.find(item => item.key === route.path)
    if(matchedRoute) {
        activeKeys.value = [matchedRoute.key]
    }
}, {immediate:true})


const handleClick:MenuClickEventHandler = (info) => {
    const path = (info.item as SubAppConfig).routerPath
    router.push({path})
}

</script>

<style lang="scss" scoped></style>