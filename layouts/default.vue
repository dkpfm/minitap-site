<template>
    <div class="layout">
        <LayoutHeader />
        <main>
            <slot />
        </main>
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
useSeoMeta({
    title: "MiniTAP – Web Sequencer",
    ogTitle: "My Amazing Site",
    description:
        "A fun sequencer for The Web that runs as a browser extension.",
    ogDescription:
        "A fun sequencer for The Web that runs as a browser extension.",
    ogImage: "https://mintap.io/og-image.jpg",
    twitterCard: "summary_large_image",
});
</script>
<style lang="scss" scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    max-width: 100%;
    overflow-x: hidden;
}
</style>
