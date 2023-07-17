import { defineNuxtModule, addVitePlugin, createResolver, addServerPlugin } from '@nuxt/kit';
import vitePluginVueSvgIcons from 'vite-plugin-vue-svg-icons';
import path from 'path';
import { existsSync } from 'node:fs';
export * from './types';
import { svgsOptions } from './types';
const resolver = createResolver(import.meta.url);
// 模块选项 TypeScript 接口定义
export interface ModuleOptions {}
export default defineNuxtModule<ModuleOptions>({
    meta: {
        // name 与 configKey 是不相同的
        name: 'nuxt-svgs-icon',
        configKey: 'NuxtSvgIcon',
        compatibility: {
            // Semver version of supported nuxt versions
            nuxt: '^3.4.1'
        }
    },
    // Nuxt模块的默认配置选项
    defaults: {},
    async setup (options: Record<string, any>, nuxt) {
        const rootDir = nuxt.options.rootDir;
        const nuxtSvgsIconConfig: svgsOptions = {
            dir: options.dir || path.resolve(rootDir, 'assets', 'svg'),
            moduleId: options.moduleId || 'nuxt-svg-icon',
            svgId: options.svgId || 'nuxt__v__svg__icons',
            iconPrefix: options.iconPrefix || 'ei',
            rootDir
        }
        nuxt.options.appConfig.nuxtSvgsIconConfig = nuxtSvgsIconConfig;
        const runtimeDir = resolver.resolve('runtime');
        nuxt.options.build.transpile.push(runtimeDir);
        const dir = nuxtSvgsIconConfig.dir as string;
        if (!path.isAbsolute(dir) || !existsSync(dir)) {  // path不对就不生效
            console.warn('error dir path Should be your svg directory! docs url:https://github.com/335296558/vite-plugin-vue-svg-icons')
            return
        }
        const svgIconPlugin = await vitePluginVueSvgIcons(nuxtSvgsIconConfig);
        const svgsHTMLString = await svgIconPlugin.transformIndexHtml('');
        nuxt.options.appConfig.nuxtSvgsIconHTMLString = svgsHTMLString;
        addServerPlugin(resolver.resolve(runtimeDir, 'server', 'injectionHtml'));
        addVitePlugin(svgIconPlugin);
    }
})
