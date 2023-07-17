import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    externals: ['path', 'node','node:*', 'node:fs', 'node:url', 'vite-plugin-vue-svg-icons', 'fs-extra', 'rollup-plugin-copy'],
    // failOnWarn: false
});
