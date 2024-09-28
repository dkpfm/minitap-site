<template>
    <div class="learn">
        <h1>Keyboard controls</h1>
        <img src="/assets/images/keyboard-channels.svg" />
        <img src="/assets/images/keyboard-modes.svg" />
    </div>
</template>

<script setup>
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
.learn {
    padding-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    > h1 {
        font-size: 120px;
        font-weight: 700;
        margin: 0;
        letter-spacing: -2px;
        line-height: 1em;
    }
    > img {
        max-width: 1000px;
        margin: 100px 20px;
        width: calc(100% - 40px);
    }
}
</style>
