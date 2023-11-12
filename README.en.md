<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-svgs-icon
- Package name: nuxt-svgs-icon
- Description: Nuxt3 svg icon
-->

# nuxt-svgs-icon

[English documentation](README.en.md) 

Because Nuxt3 does not support vite<img src="https://vitejs.dev/logo.svg" width="18px"></img>'s transformIndexHtml，So nuxt-svgs-icon is based on the [vite-plugin-svgs-icons](https://github.com/335296558/vite-plugin-svgs-icons) module package. This plug-in only supports Nuxt3

##### For more about it, please move here [vite-plugin-svgs-icons](https://github.com/335296558/vite-plugin-svgs-icons)

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
    // Configurable
    /*
    ['nuxt-svgs-icon',{
       // options
    }]
    */
  ]
})
```

#### options
| param | type | description | default |
| -------- | -------- | -------- | -------- |
|dir|String|Directory to store svg icons|`${process.cwd()}/src/assets/svg`|
|ssr|Boolean|Rendering mode, this method is rarely used in other normal situations. If you do not need server-side rendering, you can actually use [vite-plugin-svgs-icons](https://github.com/335296558/vite-plugin-svgs-icons)|false|

<!-- |moduleId|String|定义导入名称|nuxt-svg-icon| -->
#### NuxtSvgIcon Component usage instructions
```js
    // app.vue Local registration use
    <script setup>
        import NuxtSvgIcon from 'nuxt-svg-icon'
    </script>
    // The name parameter is the svg file name, for example: svg/logo.svg
    // Then you only need name="logo" to reference this svg
    <template>
        <NuxtSvgIcon name="logo" color="#f00" size="80" />
    </template>
```

#### NuxtSvgIcon Component parameter description
| param | type | default |
| -------- | -------- | -------- |
|name|String|The name must be set, which is the same as the file name, otherwise it will not be displayed. The name parameter is the name of the svg file, for example: svg/logo.svg. Then you only need name="logo" to reference this svg.|
|color|String| This method of setting color only supports single color modification! [Multicolor modification and movement](MULTICOLOR.md)|
|size|String、Number、Array| size="28"、size="[10, 20]" |

#### Version description：
    >=v1.1.2 更新vite-plugin-svgs-icons, 支持更多svg， 多色修改

    nuxt >= ^3.4.1
```
☺️ 🤪😋😘
```
