import { useAppConfig } from '#imports';
// import path from 'path';
import vitePluginVueSvgIcons from 'vite-plugin-vue-svg-icons';
export default async (NitroApp: any) => {
    const { svgIconsConfig } = useAppConfig();
    // const { dir, rootDir }:any = svgIconsConfig;
    // if (dir && !path.isAbsolute(dir)) {  // path不对就不生效
    //     console.warn('error dir path Should be your svg directory! docs url:https://github.com/335296558/vite-plugin-vue-svg-icons')
    //     return
    // }
    const { hooks } = NitroApp;
    const svgIconPlugin = vitePluginVueSvgIcons(svgIconsConfig);
    const svgHTML = await svgIconPlugin.transformIndexHtml('');
    hooks.hook('render:html', (html: any) => {
        html.bodyAppend.push(svgHTML);
    });
};
