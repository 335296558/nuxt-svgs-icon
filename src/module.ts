import { defineNuxtModule, addVitePlugin, createResolver, addServerPlugin } from '@nuxt/kit'
import vitePluginVueSvgIcons from 'vite-plugin-vue-svg-icons';
import path from 'path';
const resolver = createResolver(import.meta.url);
// Module options TypeScript interface definition
export interface ModuleOptions {}
export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: '@nuxtjs/svgicon',
        configKey: 'NuxtSvgIcon',
        compatibility: {
            // Semver version of supported nuxt versions
            nuxt: '^3.4.1'
        }
    },
    // Default configuration options of the Nuxt module
    defaults: {},
    async setup (options: any, nuxt) {
        const rootDir = nuxt.options.rootDir;
        const svgIconsConfig: any = {
            dir: options.dir || path.resolve(rootDir, 'assets', 'svg'),
            moduleId: 'nuxt-svg-icon',
            svgId: 'nuxt__v__svg__icons',
            iconPrefix: 'ei-nuxt',
            rootDir
        }
        nuxt.options.appConfig.svgIconsConfig = svgIconsConfig;
        const runtimeDir = resolver.resolve('runtime');
        nuxt.options.build.transpile.push(runtimeDir);
        // console.log(resolver.resolve(runtimeDir, 'plugins', 'setComponent.client.ts'), 'AAAA')
        // console.log(resolver.resolve(runtimeDir, 'plugins', 'setComponent.client.ts'), 'BBBB')
        if (svgIconsConfig.dir && !path.isAbsolute(svgIconsConfig.dir)) {  // path不对就不生效
            console.warn('error dir path Should be your svg directory! docs url:https://github.com/335296558/vite-plugin-vue-svg-icons')
            return
        }
        addServerPlugin(resolver.resolve(runtimeDir, 'server', 'injectionHtml'));
        addVitePlugin(vitePluginVueSvgIcons(svgIconsConfig));
        // addPlugin(resolver.resolve(runtimeDir, 'plugins', 'setComponent.client'));
        // nuxt.options.build.transpile.push('@nuxtjs/svgicon')
    }
})
