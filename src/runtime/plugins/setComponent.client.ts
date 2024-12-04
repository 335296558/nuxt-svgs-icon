import { defineNuxtPlugin, type NuxtApp } from '#app'
import NuxtSvgIcon from 'virtual:nuxt-svg-icon';
export default defineNuxtPlugin((_NuxtApp: NuxtApp) => {
  const { vueApp } = _NuxtApp
  vueApp.component('NuxtSvgIcon', NuxtSvgIcon);
})

