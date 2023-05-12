<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: @nuxtjs/svgicon
- Package name: @nuxtjs/svgicon
- Description: Nuxt3 svg icon
-->

# @nuxtjs/svgicon

[中文文档](README.md)

The module is based on [vite-plugin-vue-svg-icons](https://github.com/335296558/vite-plugin-vue-svg-icons), because Nuxt3 does not support <img src="https://vitejs.dev/logo.svg" width="18px"></img>vite's transformIndexHtml, using [vite-plugin-vue-svg-icons](https://github.com/335296558/vite-plugin-vue-svg-icons) in Nuxt3 still needs to do some processing, trouble!
In order to use this plugin more conveniently in Nuxt3, there is @nuxtjs/svgicon 😂


<img src="./playground/assets/demo.gif" width="400px"></img> 



<!-- Highlight some of the features your module provide here -->

- 🎃 &nbsp;A plugin that can modify color and size


## Quick Setup

1. Add `@nuxtjs/svgicon` dependency to your project

```bash
# Using pnpm
pnpm add -D @nuxtjs/svgicon

# Using yarn
yarn add --dev @nuxtjs/svgicon

# Using npm
npm install --save-dev @nuxtjs/svgicon
```

2. Add `@nuxtjs/svgicon` to the `modules` section of `nuxt.config.ts`

```js
// DOME1
export default defineNuxtConfig({
  modules: [
    // default
    '@nuxtjs/svgicon'
  ]
})

// DOME2
export default defineNuxtConfig({
  modules: [
    // Configurable
    ['@nuxtjs/svgicon',{
       // options
    }]
  ]
})
```

#### options
| param | type | description | default |
| -------- | -------- | -------- | -------- |
|dir|String|Directory to store svg icons|`${process.cwd()}/src/assets/svg`|
|moduleId|String|define import name|nuxt-svg-icon|

#### NuxtSvgIcon Component Instructions
```js
    // *.vue
    <script setup>
        import NuxtSvgIcon from 'nuxt-svg-icon'
    </script>
    // The name parameter is the name of the svg file, for example: svg/logo.svg
    // Then you only need name="logo" to refer to this svg
    <template>
        <NuxtSvgIcon name="logo" color="#f00" size="80" />
    </template>
```

#### NuxtSvgIcon Component parameter description
| param | type | default |
| -------- | -------- | -------- |
|name|String|Necessary to set the name, the same as the file name, or does not display well.The name parameter is a SVG file name, such as: name="logo"|
|color|String| inherit，Please set your ideal color, Support only monochrome SVG|
|size|Number|default 20, The default value is set to false, SVG size will not be set|


#### version description：
    v1.0.0

```
☺️ 🤪😋😘 If there are any deficiencies, please advise, I am on the way of learning...
```
