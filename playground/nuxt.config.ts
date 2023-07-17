export default defineNuxtConfig({
    modules: [
        ['../dist/module.mjs']
    ],
    app:{
        head: {
            title: 'goodtogo｜小马外卖官网',
        }
    },
//   lintOnSave: false,
})
