<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-svgs-icon
- Package name: nuxt-svgs-icon
- Description: Nuxt3 svg icon
-->

# nuxt-svgs-icon

[English documentation](README.en.md) 

因为Nuxt3 不支持vite<img src="https://vitejs.dev/logo.svg" width="18px"></img>的transformIndexHtml，所以 nuxt-svgs-icon 基于 [vite-plugin-vue-svg-icons](https://github.com/335296558/vite-plugin-vue-svg-icons)模块封装,该插件仅支持Nuxt3

<img src="./playground/assets/demo_git_svgo.gif" width="400px"></img> 



<!-- Highlight some of the features your module provide here -->

- 🎃 &nbsp;一个可以修改color、size 的插件


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
|moduleId|String|定义导入名称|nuxt-svg-icon|

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
|color|String| inherit，请设置上你理想的color, 仅支持单色svg|
|size|Number|默认20, 设置为false, 无默认值，svg也不会被设置上大小|
#### 版本描述：
    >=v1.0.9

    nuxt >= ^3.4.1

```
☺️ 🤪😋😘
```
