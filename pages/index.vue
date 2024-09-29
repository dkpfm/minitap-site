<template>
    <Demo />
    <div class="homepage">
        <div class="hero">
            <HomepageDisplayLogo />
            <p class="subtitle">
                <strong>A fun sequencer for the web</strong><br />that runs as a
                browser extension.
            </p>
            <Cta label="Install extension" />
            <div class="flex-fill"></div>
            <div class="preview">
                <div class="arrow"><IconArrowDown /></div>
                <Controller />
            </div>
        </div>
        <div class="bg-base">
            <div class="features">
                <div class="item">
                    <div class="icon"></div>
                    <h3>8 channels.<br />3 modes.</h3>
                    <p>
                        Each channel can be set to trigger on the beat
                        (sequencer), on keystroke, or when audio tressholds are
                        hit.
                    </p>
                </div>
                <div class="item">
                    <div class="icon"></div>
                    <h3>Send events to current tab.</h3>
                    <p>
                        Each channel can be set to trigger on the beat
                        (sequencer), on keystroke, or when audio tressholds are
                        hit.
                    </p>
                </div>
                <div class="item">
                    <div class="icon"></div>
                    <h3>Works with<br />your keyboard.</h3>
                    <p>
                        Each channel can be set to trigger on the beat
                        (sequencer), on keystroke, or when audio tressholds are
                        hit.
                    </p>
                </div>
                <div class="item">
                    <div class="icon"></div>
                    <h3>Advanced<br />tempo controls.</h3>
                    <p>
                        Each channel can be set to trigger on the beat
                        (sequencer), on keystroke, or when audio tressholds are
                        hit.
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-shade">
            <HomepageBlockLearn />
        </div>
        <div class="bg-blue">
            <HomepageBlockDemos />
        </div>
        <div class="bg-shade">
            <HomepageBlockStory />
        </div>
        <div class="bg-black">
            <HomepageBlockOpenSource />
            <LayoutFooter />
        </div>
    </div>
</template>

<script setup>
import Demo from "./extension/demo/src/App.vue";
import Controller from "./extension/src/components/Controller.vue";
useHead({
    title: "MiniTAP – Web Sequencer",
    meta: [
        {
            name: "description",
            content:
                "A fun sequencer for The Web that runs as a browser extension.",
        },
    ],
    bodyAttrs: {
        class: "test",
    },
});
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
}
.subtitle {
    font-size: 52px;
    line-height: 1;
    font-weight: 800;
    text-align: center;
    letter-spacing: -1px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 30px;
    > strong {
        font-weight: 800;
        color: black;
    }
}
.preview {
    width: 1200px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3));
    .arrow {
        transform: rotateY(45deg);
        animation: rotateAnimation 1s linear infinite;
        position: absolute;
        top: -40px;
        left: 10px;
    }
}

.features {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 0px 0 150px;

    .item {
        > .icon {
            width: 150px;
            height: 150px;
            border-radius: 50px;
            background-image: linear-gradient(180deg, #3c3c42 0%, #000000 100%);
        }
        > h3 {
            font-size: 32px;
            letter-spacing: -1px;
            line-height: 1;
            margin: 1.5em 0 1em;
        }
        > p {
            font-size: 16px;
            line-height: 20px;
            opacity: 0.7;
            font-weight: 600;
            letter-spacing: -0.5px;
        }
    }
}
.bg-base {
    width: 100%;
    background: #ececf0;
    /* margin: 150px 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

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
    padding: 150px 0;
    /* margin: 150px 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.bg-blue {
    width: 100%;
    display: flex;
    padding: 150px 0 70px;
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
