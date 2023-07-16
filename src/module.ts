import { defineNuxtModule, addVitePlugin, createResolver, addServerPlugin } from '@nuxt/kit'
import vitePluginVueSvgIcons from 'vite-plugin-vue-svg-icons';
import path from 'path';
import copy from 'rollup-plugin-copy';
// import { defu } from 'defu';
const resolver = createResolver(import.meta.url);
// Module options TypeScript interface definition
export interface SvgIconsConfig {
    dir: string;
    moduleId: string;
    svgId: string;
    iconPrefix: string;
    rootDir: string
}
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
    defaults: {
    },
    async setup (options: any, nuxt: any) {
        // const dev = nuxt.options.dev; // dev = true 开发环境
        // const envMode = nuxt.options.vite.mode; // 环境变量
        console.log(nuxt.options, 'nuxt.options');
        const rootDir = nuxt.options.rootDir;
        const svgIconsConfig: SvgIconsConfig = {
            dir: options.dir || path.resolve(rootDir, 'assets', 'svg'),
            moduleId: options.moduleId || 'nuxt-svg-icon',
            svgId: options.svgId || 'nuxt__v__svg__icons',
            iconPrefix: options.iconPrefix || 'ei',
            rootDir
        }
        nuxt.options.appConfig.svgIconsConfig = svgIconsConfig;
        const runtimeDir = resolver.resolve('runtime');

        /**
         * @description 因为在业务中没有用import导入的方法使用svg, 是用vite-plugin-vue-svg-icons 的插件方法
         * 所以项目构建的时候并不会把svg资源对应打包，所以就要用nuxt.hook的nitro:init生命处理一下
         * nitro:init 执行是在Nitro 初始化后调用，允许注册 Nitro 钩子并直接与 Nitro 交互。
        */
        nuxt.hook('nitro:init', (nitro: any)=> {
            const output = nitro.options.output;
            // const dir = output.dir;
            // const serverDir = output.serverDir;
            const publicDir = output.publicDir;
            // console.log('------------------------------------------------------------------------------');
            // console.log('------------------------------------------------------------------------------');
            // console.log('------------------------------------------------------------------------------');
            console.log(output, 'output');
            console.log(path.resolve(svgIconsConfig.dir), 'to ==>');
            console.log(path.resolve(publicDir, 'svg'), 'bbb');
            nitro.options.rollupConfig.plugins.push(
                copy({
                    targets: [
                        {
                            src: path.resolve(svgIconsConfig.dir),
                            dest: path.resolve(publicDir)
                        }
                    ],
                    // 因为打包后dist目录会被先清空，所以要加hook: 'writeBundle'
                    hook: 'writeBundle'
                })
            );
        });

        nuxt.options.build.transpile.push(runtimeDir);
        if (svgIconsConfig.dir && !path.isAbsolute(svgIconsConfig.dir)) {  // path不对就不生效
            console.warn('error dir path Should be your svg directory! docs url:https://github.com/335296558/vite-plugin-vue-svg-icons')
            return
        }
        addServerPlugin(resolver.resolve(runtimeDir, 'server', 'injectionHtml'));
        addVitePlugin(vitePluginVueSvgIcons(svgIconsConfig));
    }
})
