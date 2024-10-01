<template>
    <div class="kb">
        <h1>Controls</h1>
        <img src="/assets/images/keyboard-channels.png" />
        <img src="/assets/images/keyboard-modes.png" />
        <img src="/assets/images/keyboard-clock.png" />
    </div>
</template>

<script setup>
useHead({
    title: "MiniTAP – Keyboard controls",
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
.kb {
    padding: 200px 20px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    max-width: 100vw;

    @media (max-width: $mq-size) {
        padding-top: 150px;
    }
    > h1 {
        font-size: 120px;
        font-weight: 700;
        margin: 0 0 0.5em;
        letter-spacing: -2px;
        line-height: 1em;
        @media (max-width: $mq-size) {
            font-size: 50px;
            letter-spacing: -0.5px;
        }
    }
    > img {
        max-width: 1000px;
        margin: 10px 20px;
        width: calc(100% - 40px);
    }
}
</style>
