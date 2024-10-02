<template>
    <div class="layout">
        <ClientOnly>
            <a
                class="ph"
                href="https://www.producthunt.com/posts/minitap"
                target="_blank"
            >
                <img src="/assets/images/ph.svg" />
                <div class="time">
                    <div class="hours">{{ hoursRemain }}h</div>
                    <div class="minutes">
                        {{ minutesRemain }}:{{ secondsRemain }}
                    </div>
                </div>
            </a>
        </ClientOnly>
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
});
useSeoMeta({
    title: "MiniTAP – Web Sequencer",
    ogTitle: "MiniTAP – Web Sequencer",
    description:
        "A fun sequencer for The Web that runs as a browser extension.",
    ogDescription:
        "A fun sequencer for The Web that runs as a browser extension.",
    ogImage: "https://minitap.io/og-image.jpg",
    twitterCard: "summary_large_image",
});

import moment from "moment";
import "moment-timezone";
import { useRafFn } from "@vueuse/core";

const date = "2024-10-03T09:00:00";

// let yearsRemain = dur.years();
// let monthsRemain = dur.months();
// let daysRemain = dur.days();
const hoursRemain = ref("");
const minutesRemain = ref("");
const secondsRemain = ref("");

useRafFn(() => {
    const dur = moment.duration(
        moment(date).tz("Europe/Madrid").diff(moment()),
    );
    hoursRemain.value = dur.hours();
    minutesRemain.value = dur.minutes();
    secondsRemain.value = dur.seconds();
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
.ph {
    text-decoration: none;
    color: white;
    position: fixed;
    z-index: 99;
    right: 20px;
    top: 20px;
    filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.3));
    .time {
        position: absolute;
        bottom: 83px;
        width: 100%;
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
        line-height: 1em;
        font-size: 13px;
        .minutes {
            font-size: 9px;
        }
    }
}
</style>
