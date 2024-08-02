/*
 * @Author: shufei.han
 * @Date: 2024-08-02 11:00:08
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-02 16:02:22
 * @FilePath: \qiankun-app-practice\src\micro\index.ts
 * @Description: 
 */
import { registerMicroApps, start } from 'qiankun'

export const MICRO_CONTAINER = "micro-container"

export enum MicroEnum {
    VUE_APP,
    REACT_APP,
    NATIVE_APP,
}

export const microChildMap = new Map<MicroEnum, { key: string; port: number; name: string }>([
    [MicroEnum.VUE_APP, { key: "vue", name: "vue", port: 4002 }],
    [MicroEnum.REACT_APP, { key: "react", name: "ReactApp", port: 4003 }],
    [MicroEnum.NATIVE_APP, { key: "native", name: "NativeApp", port: 4004 }],
]);


export const initMicroApp = () => {
    registerMicroApps([
        // {
        //     name: microChildMap.get(MicroEnum.VUE_APP).name,
        //     entry: '//localhost:' + microChildMap.get(MicroEnum.VUE_APP).port,
        //     container: "#" + MICRO_CONTAINER,
        //     activeRule: '/' + microChildMap.get(MicroEnum.VUE_APP).key,
        // },
        // {
        //     name: microChildMap.get(MicroEnum.REACT_APP).name,
        //     entry: '//localhost:' + microChildMap.get(MicroEnum.REACT_APP).port,
        //     container: "#" + MICRO_CONTAINER,
        //     activeRule: '/' + microChildMap.get(MicroEnum.REACT_APP).key,
        // },
        {
            name: 'vue',
            entry: '//localhost:4002',
            container: "#vue-app",
            activeRule: '/vue',
        },
    ])

    start({})
}

// loadMicroApp()