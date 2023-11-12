import path from 'path';
// import vitePluginSvgsIcons from '../../vite-plugin-svgs-icons/dist/index';
export default defineNuxtConfig({
  modules: [
    ['../src/module', { dir: path.resolve(__dirname, 'assets', 'svg') }]
  ],
  devtools: { enabled: true },
//   vite: {
//     plugins: [
//         vitePluginSvgsIcons({
//             dir: path.resolve(__dirname, 'assets', 'svg'),
//             isNameVars: true,
//         })
//     ]
//   }
})
