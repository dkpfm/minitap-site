<template>
    <div class="page">
        <h1>Terms of Service</h1>
    </div>
</template>

<script setup>
useHead({
    title: "MiniTAP – Terms of Service",
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
.page {
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
}
</style>
