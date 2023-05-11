import { defineNuxtPlugin } from '#app';
import svgIcon from 'svg-icon';
export default defineNuxtPlugin((NuxtApp) => {
  const { vueApp } = NuxtApp
  vueApp.component('SvgIcon', svgIcon);
})

