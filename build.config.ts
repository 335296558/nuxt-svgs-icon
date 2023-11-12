import { defineBuildConfig } from 'unbuild'
export default defineBuildConfig({
    externals: ['path', 'node','node:*', 'node:fs', 'node:url', 'vite-plugin-svgs-icons'],
    // entries: [
    //     './install.js'
    // ]
    // failOnWarn: false
});
