<template>
    <div class="learn">
        <h1>API</h1>

        <h2>
            <div class="circle">1</div>

            Setup
        </h2>
        <p>Listen to message events on the window.</p>
        <ClientOnly>
            <div class="code">
                <highlightjs autodetect :code="code" />
            </div>
        </ClientOnly>

        <div style="height: 20px"></div>

        <h2>
            <div class="circle">2</div>
            Events
        </h2>
        <p>Listen to message events on the window.</p>
        <div class="block">
            <table>
                <tr
                    :class="{ payload: row.isPayload }"
                    v-for="row in docsApiData"
                >
                    <td class="c">
                        <div>{{ row.code }}</div>
                    </td>
                    <td class="desc" v-html="row.desc"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "MiniTAP – Connection API",
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

const code = `
window.addEventListener('message', ({ data }) => {
  // check event name (see below)
  if (data.name === "mt-channel1-on") {
    // do what you wish!
    triggerAnimation();
  }
});
`;

import docsApiData from "~/data/docs-api";
</script>

<style lang="scss">
.learn {
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
        margin: 0;
        letter-spacing: -2px;
        line-height: 1em;
        @media (max-width: $mq-size) {
            font-size: 50px;
            letter-spacing: -0.5px;
        }
    }
}
.code {
    border-radius: 20px;
    overflow: hidden;
    font-size: 16px;
    @media (max-width: $mq-size) {
        font-size: 14px;
        max-width: 100%;
    }
    pre {
        margin: 0;
        code.hljs {
            margin: 0;
            text-align: left;
            padding: 1em 2em 2em;
        }
    }
}
.circle {
    width: 30px;
    height: 30px;
    background: black;
    border-radius: 50%;
    color: white;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    letter-spacing: 0;
}
h2 {
    font-size: 34px;
    letter-spacing: -0.75px;
    font-weight: 700;
    margin: 2em 0 0.25em;
    line-height: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
p {
    margin: 0 0 2em;
    font-size: 22px;
    opacity: 0.5;
    line-height: 1.2em;
}
.block {
    background: white;
    padding: 40px 20px;
    border-radius: 30px;
    width: 640px;
    max-width: 100%;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.5);
    /* @media (max-width: $mq-size) {
        font-size: 14px;
    } */
    table {
        tr {
            position: relative;

            &:before {
                content: "";
                height: 1.5px;
                background: #eee;
                width: 90%;
                display: block;
                position: absolute;
                left: 5%;
            }
        }
        .c {
            padding: 15px;
            text-align: right;
            /* vertical-align: bottom; */

            > div {
                background: #1a1b26;
                display: inline-block;
                color: #9ece6a;
                padding: 7px 10px;
                border-radius: 10px;
                font-family: monospace;
                font-size: 14px;
                font-weight: 600;
                white-space: nowrap;
            }
        }

        .desc {
            padding: 10px;
            text-align: left;
        }

        tr:first-child:before {
            opacity: 0;
        }
        .payload {
            &:before {
                opacity: 0;
            }

            .c,
            .desc {
                padding-top: 0;
            }
            .c > div {
                background: #eee;
                color: #333;
            }
        }
    }
    @media (max-width: $mq-size) {
        display: flex;
        flex-direction: column;
        line-height: 1.2em;

        table .c {
            text-align: left;
            padding-bottom: 0;

            > div {
                position: relative;
                left: -10px;
                margin-bottom: 5px;
                font-size: 14px;
                padding: 3px 7px;
            }
        }
        tr {
            display: flex;
            flex-direction: column;
        }
        .desc {
            font-size: 18px;
        }
    }
}
</style>
