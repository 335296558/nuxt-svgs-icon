<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-svgs-icon
- Package name: nuxt-svgs-icon
- Description: Nuxt3 svg icon
-->

# nuxt-svgs-icon

[English documentation](README.en.md) 

因为Nuxt3 不支持vite<img src="https://vitejs.dev/logo.svg" width="18px"></img>的transformIndexHtml，所以 nuxt-svgs-icon 基于 [vite-plugin-svgs-icons](https://github.com/335296558/vite-plugin-svgs-icons)模块封装,该插件仅支持Nuxt3

##### 关于它的更多，请移步 [vite-plugin-svgs-icons](https://github.com/335296558/vite-plugin-svgs-icons)

<img src="./playground/assets/testing_git_svgs.gif" width="400px"></img> 

## Quick Setup

1. Add `nuxt-svgs-icon` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-svgs-icon -D

# Using npm
npm install nuxt-svgs-icon --save-dev
```

2. Add `nuxt-svgs-icon` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-svgs-icon'
    // 可配置
    /*
    ['nuxt-svgs-icon',{
       // options
    }]
    */
  ]
})
```

#### options
| 参数名 | 类型 | 描述 | 默认值 |
| -------- | -------- | -------- | -------- |
|dir|String|存放svg图标的目录|`${process.cwd()}/src/assets/svg`|
|ssr|Boolean|渲染模式, 其它正常情况很少情况会用到这种方式! 其实你可以直接用 [vite-plugin-svgs-icons](https://github.com/335296558/vite-plugin-svgs-icons) 即可|true|

<!-- |moduleId|String|定义导入名称|nuxt-svg-icon| -->
#### NuxtSvgIcon组件使用说明
```js
    // app.vue 局部注册使用
    <script setup>
        import NuxtSvgIcon from 'nuxt-svg-icon'
    </script>
    // name参数是svg文件名称，比如：svg/logo.svg
    // 那么你引用这个svg 只需要name="logo"
    <template>
        <NuxtSvgIcon name="logo" color="#f00" size="80" />
    </template>
```

#### 组件参数说明
| 参数名 | 类型 | 默认值 |
| -------- | -------- | -------- |
|name|String|必需设置name，与文件名称一样， 否则不显示哦。name参数是svg文件名称，比如：svg/logo.svg 那么你引用这个svg 只需要name="logo"|
|color|String| 设置颜色此方法仅支持单色修改！ [关于多色修改请移步](MULTICOLOR.md)|
|size|String、Number、Array| size="28"、size="[10, 20]" |

#### 版本描述：
    >=v1.1.3 更新vite-plugin-svgs-icons, 支持更多svg， 多色修改

    nuxt >= ^3.4.1
```
☺️ 🤪😋😘
```
