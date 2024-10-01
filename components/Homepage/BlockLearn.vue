<template>
    <div
        class="wrapper"
        :style="`background: ${playing ? '#B8B8C2' : 'transparent'}`"
    >
        <h3 class="title">MiniTAP in 30sec.</h3>
        <div class="video-block" @click="playVideo">
            <img
                src="/assets/images/video-thumb.jpg"
                v-if="!playing || !ready"
            />
            <video
                ref="videoEl"
                :src="
                    windowWidth < 800
                        ? '/videos/intro-mockup-v3-720p.mp4'
                        : '/videos/intro-mockup-v3-4k.mp4'
                "
            />
            <div class="video-block-title" v-if="!playing">
                <h3 class="title">MiniTAP in 30sec.</h3>
                <Cta label="Watch intro video"><IconPlay /></Cta>
            </div>
        </div>
        <nav>
            <Cta
                to="/learn/keyboard-controls"
                label="Keyboard controls"
                size="small"
                type="inverted"
                ><IconTinyKeyboard /></Cta
            ><Cta
                to="/learn/connection-api"
                label="How to connect"
                size="small"
                type="inverted"
                ><IconTinyConnection
            /></Cta>
        </nav>
    </div>
</template>

<script setup>
const videoEl = ref();
const playing = ref(false);
const ready = ref(false);
import { useRafFn } from "@vueuse/core";

const { pause, resume } = useRafFn(() => {
    ready.value =
        videoEl.value.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA;
    if (videoEl.value.currentTime >= videoEl.value.duration) {
        videoEl.value.currentTime = 0;
        videoEl.value.pause();
        playing.value = false;
    }
});
pause();

function playVideo() {
    if (!playing.value) {
        playing.value = true;
        videoEl.value?.play();
        resume();
    } else {
        videoEl.value?.pause();
        videoEl.value.currentTime = 0;
        playing.value = false;
        pause();
    }
}

import { useWindowSize } from "@vueuse/core";
const { width: windowWidth } = useWindowSize();
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    background: transparent;
    padding: 150px 0;
    /* margin: 150px 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: background-color 1s linear;
    @media (max-width: $mq-size) {
        padding: 100px 0;
    }
}
.title {
    font-size: 80px;
    font-weight: 700;
    margin: 0 0 20px;
    letter-spacing: -1.5px;
    display: none;
    text-align: center;
    @media (max-width: $mq-size) {
        padding-bottom: 40px;
        font-size: 48px;
        line-height: 1;
        display: block;
    }
}
.video-block {
    width: 1100px;
    /* height: 660px; */
    max-width: 90vw;
    aspect-ratio: 1100/660;
    border-radius: 40px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    margin: 0 auto;

    @media (max-width: $mq-size) {
        height: auto;
        border-radius: 20px;
    }
    img,
    video {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
    }
    .video-block-title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 100px;

        @media (max-width: $mq-size) {
            padding-bottom: 40px;
        }
        .title {
            display: block;
            @media (max-width: $mq-size) {
                display: none;
            }
        }
    }
}
nav {
    padding: 60px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media (max-width: $mq-size) {
        padding-top: 30px;
        flex-direction: column;
    }
}
</style>
