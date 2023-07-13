<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-svgs-icon
- Package name: nuxt-svgs-icon
- Description: Nuxt3 svg icon
-->

# nuxt-svgs-icon

[中文文档](README.md)

Because Nuxt3 does not support transformIndexHtml of vite <img src="https://vitejs.dev/logo.svg" width="18px"></img>, nuxt-svgs-icon is based on [vite-plugin-vue-svg-icons](https://github.com/335296558/vite-plugin-vue-svg-icons) module package, this plugin only supports Nuxt3


<img src="./playground/assets/demo.gif" width="400px"></img> 



<!-- Highlight some of the features your module provide here -->

- 🎃 &nbsp;A plugin that can modify color and size


## Quick Setup

1. Add `nuxt-svgs-icon` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-svgs-icon -D

# Using yarn
yarn add nuxt-svgs-icon

# Using npm
npm install nuxt-svgs-icon --save-dev
```

2. Add `nuxt-svgs-icon` to the `modules` section of `nuxt.config.ts`

```js
// DOME1
export default defineNuxtConfig({
  modules: [
    // default
    'nuxt-svgs-icon'
  ]
})

// DOME2
export default defineNuxtConfig({
  modules: [
    // Configurable
    ['nuxt-svgs-icon',{
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
    >=v1.0.5
    nuxt >= ^3.4.1
```
☺️ 🤪😋😘
```
