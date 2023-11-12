<template>
    <div>
        <div style="text-align: center;">
            <h1 :style="`color: ${color};`">DEMO</h1>
            <div class="install">
                <h4 style="color:rgb(253, 169, 169);display: flex;align-items: center;justify-content: center;">
                    <span style="padding-right:15px;">vite-plugin-svgs-icons 文档 👉👉👉</span>
                    <a href="https://github.com/335296558/vite-plugin-svgs-icons/blob/main/README.md" target="_blank">
                        <NuxtSvgIcon name="github" size="30"></NuxtSvgIcon>
                    </a>
                </h4>
            </div>
            <div class="box">
                <div class="title"><b>修改大小</b></div>
                <br />
                <label class="label" v-for="(k, i) in 8" :key="k+i">
                    <span>{{ (i+1) * 12 }}px</span>
                    <input type="radio" :value="(i+1) * 12" v-model="size" />
                </label>
            </div>
            <div class="box">
                <div class="title"><b>修改color</b></div>
                <br />
                <label class="label">
                    <span style="color: #000000">黑色</span>
                    <input type="radio" value="#000000" v-model="color" />
                </label>
                <label class="label">
                    <span style="color: #ff9c00">黄色</span>
                    <input type="radio" value="#ff9c00" v-model="color" />
                </label>
                <label class="label">
                    <span style="color: #0739ff">蓝色</span>
                    <input type="radio" value="#0739ff" v-model="color" />
                </label>
                <label class="label">
                    <span style="color: #9707ff">紫色</span>
                    <input type="radio" value="#9707ff" v-model="color" />
                </label>
            </div>
            <h4 style="color:rgb(253, 169, 169);display: flex;align-items: center;justify-content: center;">
                <span style="padding-right:15px;">Nuxt3用法👉👉👉</span>
                <a href="https://github.com/335296558/nuxt-svg-icon" target="_blank">
                    <NuxtSvgIcon name="github" size="30"></NuxtSvgIcon>
                </a>
            </h4>
        </div>
        <div :style="`padding: 8px;color: ${color}; text-align: center;`">
            在这个丰富多彩的世界，也许我们需要多点 Color!
        </div>
        <div class="svg-testing-icon-box">
            <ul>
                <li v-for="(name, i) in svgIconNames" :key="i"  style="padding: 8px">
                    <NuxtSvgIcon
                        :style="`width: ${size}px;height: ${size}px;--${name}-svg-color: ${color}`"
                        :color="color"
                        :name="name"
                    ></NuxtSvgIcon>
                </li>
            </ul>
        </div>
    </div>
    <NuxtSvgIcon name="logo" :color="color" :size="size"></NuxtSvgIcon>
</template>

<script setup>
import { ref } from 'vue';
import NuxtSvgIcon from 'virtual:nuxt-svg-icon';
const svgIconNames = []
// import NuxtSvgIcon from 'virtual:svg-icon';
// import svgIcon, { svgIconNames } from 'virtual:svg-icon';
const color = ref('#ff9c00');
const size = ref(42);
</script>

<style scoped>

ul ,.li{
    padding: 0;
    margin: 0;
    list-style: none;
}
.svg-testing-icon-box{
    background: #fafafa;
    overflow: hidden;
    border-radius: 10px;
    padding: 10px;
}
.svg-testing-icon-box ul li{
    float: left;
}
.box {
    padding: 15px;
}
.label {
    padding: 15px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 700;
}
</style>
