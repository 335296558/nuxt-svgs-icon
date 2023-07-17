import { defineNuxtModule, createResolver } from '@nuxt/kit'
// import copy from 'rollup-plugin-copy';
import { getSvgIconsConfig, setPlugin } from './mod';
const resolver = createResolver(import.meta.url);

// Module options TypeScript interface definition
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
    async setup (options: any, nuxt: any) {
        const dev = nuxt.options.dev; // dev = true 开发环境
        options.debug && console.log('dev=>', dev);
        // const envMode = nuxt.options.vite.mode; // 环境变量
        const rootDir = nuxt.options.rootDir; // 项目根目录的path
        const runtimeDir = resolver.resolve('runtime');
        const injectionHtmlPlugin = resolver.resolve(runtimeDir, 'server', 'injectionHtml');
        const svgIconsConfig = getSvgIconsConfig({
            ...options,
            rootDir,
            buildDir: rootDir
        })
        if (dev) {
            setPlugin(nuxt, svgIconsConfig, runtimeDir, injectionHtmlPlugin);
            return;
        }
        /**
         * @description 因为在业务中没有用import导入的方法使用svg, 是用vite-plugin-vue-svg-icons 的插件方法
         * 所以项目构建的时候并不会把svg资源对应打包，所以就要用nuxt.hook的nitro:init生命周期处理一下
         * nitro:init 执行是在Nitro 初始化后调用，允许注册 Nitro 钩子并直接与 Nitro 交互。
         * 其它逻辑的代码也放到 nitro:init 里是为了等拿到 output 参数，为了得到配置中的构建配置path
        */
        nuxt.hook('nitro:init', (nitro: any)=> {
            const output = nitro.options.output;
            // console.log(output, 'output');
            // const dir = output.dir;
            // const serverDir = output.serverDir;
            const publicDir: string = output.publicDir;
            svgIconsConfig.buildDir = publicDir;
            options.debug && console.log('svgIconsConfig==>', svgIconsConfig);
            // const copyFiles = [{ src: svgIconsConfig.dir, dest: svgIconsConfig.buildDir }];
            // nitro.options.rollupConfig.plugins.push(
            //     copy({
            //         targets: [
            //             {
            //                 src: svgIconsConfig.dir,
            //                 dest: svgIconsConfig.buildDir
            //             }
            //         ],
            //         // 因为打包后dist目录会被先清空，所以要加hook: 'writeBundle'
            //         hook: 'writeBundle'
            //     })
            // );

            setPlugin(nuxt, svgIconsConfig, runtimeDir, injectionHtmlPlugin);
        });

        nuxt.hook('schema:written', ()=> {
            console.log(nuxt.options.nitro);
        });
    }
})
