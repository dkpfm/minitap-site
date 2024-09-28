<template>
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
                <Controller />
            </div>
        </div>
        <div class="features">
            <div class="item">
                <div class="icon"></div>
                <h3>8 channels.<br />3 modes.</h3>
                <p>
                    Each channel can be set to trigger on the beat (sequencer),
                    on keystroke, or when audio tressholds are hit.
                </p>
            </div>
            <div class="item">
                <div class="icon"></div>
                <h3>Send events to current tab.</h3>
                <p>
                    Each channel can be set to trigger on the beat (sequencer),
                    on keystroke, or when audio tressholds are hit.
                </p>
            </div>
            <div class="item">
                <div class="icon"></div>
                <h3>Works with<br />your keyboard.</h3>
                <p>
                    Each channel can be set to trigger on the beat (sequencer),
                    on keystroke, or when audio tressholds are hit.
                </p>
            </div>
            <div class="item">
                <div class="icon"></div>
                <h3>Advanced<br />tempo controls.</h3>
                <p>
                    Each channel can be set to trigger on the beat (sequencer),
                    on keystroke, or when audio tressholds are hit.
                </p>
            </div>
        </div>
        <div class="bg-shade">
            <HomepageBlockLearn />
        </div>
        <div class="bg-default">
            <HomepageBlockDemos />
        </div>
        <div class="bg-shade">
            <HomepageBlockStory />
        </div>
    </div>
</template>

<script setup>
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
.homepage {
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
    margin-bottom: 100px;
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
}

.features {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
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
.bg-shade {
    width: 100%;
    background: #e5e5e9;
    padding: 150px 0;
    margin: 150px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.bg-default {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
