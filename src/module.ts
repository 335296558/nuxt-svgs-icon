import { fileURLToPath } from 'url'
import { defineNuxtModule, addVitePlugin, addPlugin, createResolver, addServerPlugin } from '@nuxt/kit'
import vitePluginVueSvgIcons from 'vite-plugin-vue-svg-icons';
const resolver = createResolver(import.meta.url);
// Module options TypeScript interface definition
export interface ModuleOptions {}
export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: '@nuxtjs/svgicon',
        configKey: 'svg-icon',
        compatibility: {
            // Semver version of supported nuxt versions
            nuxt: '^3.4.3'
        }
    },
    // Default configuration options of the Nuxt module
    defaults: {},
    async setup (options: any, nuxt) {
        const svgIconsConfig: any = {
            dir: options.dir,
            rootDir: nuxt.options.rootDir,
        }
        nuxt.options.appConfig.svgIconsConfig = svgIconsConfig;
        const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
        nuxt.options.build.transpile.push(runtimeDir);
        console.log(resolver.resolve(runtimeDir, 'plugins', 'setComponent.client.ts'), 'AAAA')
        console.log(resolver.resolve('./runtime/plugins/setComponent.client.ts'), 'BBBB')
        addServerPlugin(resolver.resolve('./runtime/server/injectionHtml'));
        addVitePlugin(vitePluginVueSvgIcons());
        addPlugin(resolver.resolve('./runtime/plugins/setComponent.client'))
        // addServerPlugin(resolver.resolve(runtimeDir, 'server', 'injectionHtml'));
        // addVitePlugin(vitePluginVueSvgIcons());
        // addPlugin(resolver.resolve(runtimeDir, 'plugins', 'setComponent.client'))
    }
})
