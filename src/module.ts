import { defineNuxtModule, addVitePlugin, createResolver, addServerPlugin } from '@nuxt/kit';
// 注意、注意、注意：Nuxt Module 默认会优先调用.cjs，如果.cjs不存在就会调.js
import vitePluginSvgsIcons from 'vite-plugin-svgs-icons';
import path from 'path';
import { existsSync } from 'node:fs';
const resolver = createResolver(import.meta.url);
// 模块选项 TypeScript 接口定义
export interface ModuleOptions {}
export default defineNuxtModule<ModuleOptions>({
    meta: {
        // name 与 configKey 是不相同的
        name: 'nuxt-svgs-icon',
        configKey: 'NuxtSvgsIcon',
        compatibility: {
            // Semver version of supported nuxt versions
            nuxt: '^3.8.1'
        }
    },
    // Nuxt模块的默认配置选项
    defaults: {
        dir: '',
        moduleId: 'virtual:nuxt-svg-icon',
        svgId: 'nuxt__v__svg__icons',
        iconPrefix: 'nuxt-icona',
        ssr: true,
        svgIconNames: false,
    },
    async setup (options: Record<string, any>, nuxt) {
        const rootDir = nuxt.options.rootDir;
        const dir: any = options.dir || path.resolve(rootDir, 'assets', 'svg');
        if (!dir || !path.isAbsolute(dir) || !existsSync(dir)) {
            const clc = {
                red: (text: string) => `\x1B[31m${text}\x1B[0m`
            };
            console.log(clc.red('error dir path Should be your svg directory! docs url:https://github.com/335296558/vite-plugin-svgs-icons, When this warning appears, you cannot impirt '+options.moduleId))
            return;
        }

        const config: any = {
            ...options,
            rootDir: dir
        }
        nuxt.options.appConfig.nuxtSvgsIconConfig = config;
        const runtimeDir = resolver.resolve('runtime');
        nuxt.options.build.transpile.push(runtimeDir);
        const svgIconPlugin = vitePluginSvgsIcons(config);
        await addVitePlugin([svgIconPlugin as any]);
        const svgsHTMLString = svgIconPlugin.transformIndexHtml('');
        nuxt.options.appConfig.nuxtSvgsIconHTMLString = svgsHTMLString;
        addServerPlugin(resolver.resolve(runtimeDir, 'server', 'injectionHtml'));
    }
})
