<template>
    <Demo />
    <div class="homepage">
        <div class="hero">
            <div class="logo">
                <HomepageDisplayLogo />
            </div>
            <p class="subtitle">
                <strong>A fun sequencer for the web</strong><br />that runs as a
                browser extension.
            </p>
            <Cta
                label="Install extension"
                to="https://chromewebstore.google.com/detail/minitap/dmnepbgemmjegkkeddgmaoagmhakeiml"
                target="blank"
                ><IconDown
            /></Cta>
            <div class="flex-fill"></div>

            <div class="preview-filler">
                <div class="preview">
                    <div class="arrow" v-if="!isPlaying">
                        <img src="/assets/images/arrow.png" />
                    </div>
                    <Controller />
                </div>
            </div>
        </div>
        <div class="bg-features">
            <div class="features">
                <div class="item">
                    <div class="icon">
                        <img src="/assets/images/icon-channels.png" />
                    </div>
                    <h3>8 channels.<br />3 modes.</h3>
                    <p>
                        Each channel can be set to trigger on the beat
                        (sequencer), on keystroke, or randomly.
                    </p>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="/assets/images/icon-keyboard.png" />
                    </div>
                    <h3>Works with<br />your keyboard.</h3>
                    <p>
                        The key bindings are designed for expressive usage in
                        live settings. No mouse needed.
                    </p>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="/assets/images/icon-code.png" />
                    </div>
                    <h3>Send events to current tab.</h3>
                    <p>
                        MiniTAP posts messages to the window. What you do with
                        them is up to you.
                    </p>
                </div>
                <div class="item">
                    <div class="icon">
                        <img src="/assets/images/icon-tempo.png" />
                    </div>
                    <h3>Advanced<br />tempo controls.</h3>
                    <p>
                        Tap following the tempo to guess the BPM. Use the arrow
                        keys for fine tuning.
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-shade">
            <HomepageBlockLearn />
        </div>
        <!-- <div class="bg-blue">
            <HomepageBlockDemos />
        </div> -->
        <div class="bg-base">
            <HomepageBlockStory />
        </div>
        <div class="bg-blue">
            <HomepageBlockOpenSource />
        </div>
        <LayoutFooter />
    </div>
</template>

<script setup>
import Demo from "./extension/demo/src/App.vue";
import Controller from "./extension/src/components/Controller.vue";

const controllerClock = inject("controllerClock");
const isPlaying = computed(() => controllerClock.isPlaying.value);
</script>

<style lang="scss">
@keyframes rotateAnimation {
    from {
        transform: rotateY(45deg);
    }
    to {
        transform: rotateY(225deg);
    }
}
.homepage {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
.hero {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    text-align: center;
    gap: 20px;
    padding: 200px 0 100px;
    position: relative;
    z-index: 2;

    @media (max-width: $mq-size) {
        padding: 150px 0 50px;
        height: fit-content;
        min-height: none;
        gap: 10px;
        min-height: 0vh;
    }

    .logo {
        svg {
            max-width: 80vw;
            max-height: 100%;
            min-height: 0%;
            height: auto;
        }
    }
}
.subtitle {
    font-size: 52px;
    line-height: 1;
    font-weight: 800;
    text-align: center;
    letter-spacing: -1px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 30px;
    max-width: 100%;

    > strong {
        font-weight: 800;
        color: black;
    }

    @media (max-width: $mq-size) {
        font-size: 20px;
        line-height: 1;
        letter-spacing: -1px;
        padding: 0;
    }
}
.preview-filler {
    position: relative;
    width: 100%;
    @media (max-width: 1200px) {
        height: 250px;
    }
}
.preview {
    width: 1200px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3));

    @media (max-width: 1200px) {
        position: absolute;
        left: 20px;
        top: 100px;
    }

    @media (max-width: $mq-size) {
        padding-top: 60px;
        left: -20px;
        top: 0px;
    }

    .arrow {
        position: absolute;
        top: -50px;
        left: 6px;
        img {
            width: 40px;
        }
        @media (max-width: $mq-size) {
            top: 10px;
        }
    }
}

.features {
    max-width: 1200px;
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 50px;
    padding: 0px 40px 150px;

    @media (max-width: $mq-size) {
        flex-wrap: wrap;
        padding: 10px 35px 100px;
    }

    .item {
        flex: 1 1 0px;
        @media (max-width: $mq-size) {
            min-width: calc(50% - 30px);
        }
        > .icon {
            width: 150px;
            height: 150px;
            /* border-radius: 50px; */
            /* background-image: linear-gradient(180deg, #3c3c42 0%, #000000 100%); */

            @media (max-width: $mq-size) {
                width: 100px;
                height: 100px;
                border-radius: 40px;
            }
        }
        > h3 {
            font-size: 32px;
            letter-spacing: -1px;
            line-height: 1;
            margin: 1.5em 0 1em;

            @media (max-width: $mq-size) {
                font-size: 22px;
                letter-spacing: -1px;
                margin: 1em 0 0.5em;
            }
        }
        > p {
            font-size: 16px;
            line-height: 1.2em;
            opacity: 0.7;
            font-weight: 600;
            letter-spacing: -0.5px;
            text-wrap: pretty;
            @media (max-width: $mq-size) {
                font-size: 14px;
                letter-spacing: -0.25px;
            }
        }
    }
}
.bg-base,
.bg-features {
    width: 100%;
    background: #ececf0;
    /* margin: 150px 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}
.bg-features {
    &:before {
        content: "";
        position: absolute;
        background-image: linear-gradient(0deg, #ececf0, transparent);
        height: 500px;
        top: -500px;
        width: 100%;
    }
}
.bg-shade {
    width: 100%;
    background: #e5e5e9;
    /* padding: 150px 0; */
    /* margin: 150px 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* @media (max-width: $mq-size) { */
    /* padding: 100px 0; */
    /* } */
}
.bg-blue {
    width: 100%;
    display: flex;
    /* padding: 150px 0 70px; */
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #237aec;
    background-image: linear-gradient(45deg, #0a6bea 25%, transparent 25%),
        linear-gradient(-45deg, #0a6bea 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #0a6bea 75%),
        linear-gradient(-45deg, transparent 75%, #0a6bea 75%);
    background-size: 80px 80px;
    background-position:
        0 0,
        0 40px,
        40px -40px,
        -40px 0px;
    @media (max-width: $mq-size) {
        padding: 100px 0;
    }
}
.bg-black {
    background: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
}
</style>
