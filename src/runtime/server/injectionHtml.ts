import { useAppConfig } from '#imports';
import vitePluginVueSvgIcons from 'vite-plugin-vue-svg-icons';
export default async (NitroApp: any) => {
    const { svgIconsConfig } = useAppConfig();
    const { hooks } = NitroApp;
    const svgIconPlugin = await vitePluginVueSvgIcons(svgIconsConfig);
    const svgHTML = await svgIconPlugin.transformIndexHtml('');
    hooks.hook('render:html', (html: any) => {
        html.bodyAppend.push(svgHTML);
    });
};
