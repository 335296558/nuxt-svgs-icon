import { useAppConfig } from '#imports';
export default async (NitroApp: any) => {
    const { nuxtSvgsIconHTMLString }:any = useAppConfig();
    const { hooks } = NitroApp;
    hooks.hook('render:html', (html: any) => {
        html.bodyAppend.push(nuxtSvgsIconHTMLString);
    });
};
