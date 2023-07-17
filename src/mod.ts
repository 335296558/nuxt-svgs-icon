import path from 'path';
import { svgsOptions } from './types';
import { addVitePlugin, addServerPlugin } from '@nuxt/kit';
import vitePluginVueSvgIcons from 'vite-plugin-vue-svg-icons';

export function getSvgIconsConfig(options: svgsOptions) {
    return {
        dir: options.dir || path.resolve(options.rootDir, 'assets', 'svg'),
        buildDir: options.buildDir,
        moduleId: options.moduleId || 'nuxt-svg-icon',
        svgId: options.svgId || 'nuxt__v__svg__icons',
        iconPrefix: options.iconPrefix || 'ei',
        rootDir: options.rootDir,
    }
}

export function setPlugin(nuxt: any, svgIconsConfig: svgsOptions, runtimeDir: string, injectionHtmlPlugin: string) {
    nuxt.options.appConfig.svgIconsConfig = svgIconsConfig;
    nuxt.options.build.transpile.push(runtimeDir);
    if (svgIconsConfig.dir && !path.isAbsolute(svgIconsConfig.dir)) {  // path不对就不生效
        console.warn('error dir path Should be your svg directory! docs url:https://github.com/335296558/vite-plugin-vue-svg-icons')
        return
    }
    addServerPlugin(injectionHtmlPlugin);
    addVitePlugin(vitePluginVueSvgIcons(svgIconsConfig));
}

