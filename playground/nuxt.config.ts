import path from 'path';
// import vitePluginSvgsIcons from '../../vite-plugin-svgs-icons/dist/index';
export default defineNuxtConfig({
  modules: [
    ['../src/module', {
        dir: path.resolve(__dirname, 'assets', 'svg')
    }]
  ],

  //   vite: {
  //     plugins: [
  //         vitePluginSvgsIcons({
  //             dir: path.resolve(__dirname, 'assets', 'svg'),
  //             isNameVars: true,
  //         })
  //     ]
  //   }
  devtools: { enabled: true },

  compatibilityDate: '2024-12-04'
})
