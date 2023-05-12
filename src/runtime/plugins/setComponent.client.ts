import { defineNuxtPlugin } from '#app';
import NuxtSvgIcon from 'nuxt-svg-icon';
export default defineNuxtPlugin((NuxtApp) => {
  const { vueApp } = NuxtApp
  vueApp.component('NuxtSvgIcon', NuxtSvgIcon);
})

