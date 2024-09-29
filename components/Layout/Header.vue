<template>
    <header>
        <div class="main">
            <NuxtLink class="icon" to="/">
                <img src="/assets/images/icon.svg" />
            </NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
            <div class="item">
                Learn
                <div class="popover">
                    <NuxtLink to="/learn/keyboard-controls">
                        <div class="icon"><IconTinyKeyboard /></div>
                        Keyboard controls</NuxtLink
                    >
                    <NuxtLink to="/learn/connection-api">
                        <div class="icon"><IconTinyConnection /></div>
                        Connection API</NuxtLink
                    >
                </div>
            </div>
            <!-- <NuxtLink to="/#demos">Demos</NuxtLink> -->
            <NuxtLink to="/#story">Story</NuxtLink>
            <div class="item" to="/">
                Support
                <div class="popover left">
                    <a href="https://x.com/KMkota0" target="_blank">
                        <div class="icon"><IconX /></div>
                        Follow me on X</a
                    >
                    <a href="https://github.com/dkpfm/minitap" target="_blank">
                        <div class="icon"><IconGithub /></div>
                        Like on Github</a
                    >
                </div>
            </div>
        </div>
        <NuxtLink
            v-if="false"
            :class="{ cta: true, [size]: true, [type]: true }"
            :to="'/'"
        >
            <div class="icon">
                <div class="circ">
                    <slot></slot>
                </div>
            </div>
            Install
        </NuxtLink>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    top: 40px;
    gap: 5px;
    > .main {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        background: white;
        height: 40px;
        border-radius: calc(40px / 2);
        border: 1px solid rgba(#b8b8bd, 0.8);
        padding: 0 20px 0 15px;
        box-shadow: 0 2px 15px rgba(black, 0.1);
        > .icon img {
            max-width: none;
        }
        > a,
        > .item {
            text-decoration: none;
            color: black;
            letter-spacing: -0.5px;
            padding: 3px 10px;
            border-radius: 8px;
            cursor: pointer;
            position: relative;

            @media (max-width: $mq-size) {
                padding: 3px 8px;
            }

            &:hover {
                background: #eee;
                .popover {
                    transform: scale(1);
                    opacity: 1;
                    visibility: visible;
                }
            }

            .popover {
                margin-top: 8px;
                position: absolute;
                left: -10px;
                display: flex;
                align-items: start;
                justify-content: start;
                flex-direction: column;
                background: white;
                border: 1px solid rgba(#b8b8bd, 0.8);
                box-shadow: 0 2px 15px rgba(black, 0.1);
                width: fit-content;
                flex-shrink: 0;
                white-space: nowrap;
                /* overflow: hidden; */
                text-overflow: ellipsis;
                border-radius: 15px;
                padding: 8px;
                transform: scale(0.8);
                transform-origin: top left;
                transition:
                    transform 0.07s ease-out,
                    opacity 0.05s linear;
                transition-delay: 0.06s;
                opacity: 0;
                visibility: hidden;

                &.left {
                    right: -10px;
                    left: auto;
                    transform-origin: top right;
                }
                &:before {
                    content: "";
                    /* background: red; */
                    position: absolute;
                    width: 100%;
                    height: 20px;
                    left: 0;
                    top: -10px;
                }

                > a {
                    display: flex;
                    flex-shrink: 0;
                    text-decoration: none;
                    color: black;
                    padding: 5px 20px 5px 5px;
                    border-radius: 8px;
                    min-width: 100%;
                    > .icon {
                        width: 20px;
                        height: 20px;
                        background: black;
                        border-radius: 8px;
                        margin-right: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    &:hover {
                        background: #eee;
                    }
                }
            }
        }
        > .icon {
            margin-left: -10px;
            &:hover {
                background: transparent;
            }
        }
    }
}
.cta {
    height: 56px;
    border-radius: calc(56px / 2);
    background: black;
    display: flex;
    text-decoration: none;
    color: white;
    align-items: center;
    justify-content: center;
    padding: 0 25px 0 10px;
    gap: 15px;
    font-weight: 500;
    width: fit-content;
    height: 40px;
    border-radius: calc(40px / 2);
    font-size: 14px;
    gap: 10px;
    border: 1px solid #222;

    &.faded {
        background: rgba(black, 0.1);
        color: black;
    }
    .icon {
        width: 28px;
        height: 28px;
        border-radius: calc(28px / 2);
        background: var(--accent-faded);
        display: flex;
        align-items: center;
        justify-content: center;
        .circ {
            width: 18px;
            height: 18px;
            border-radius: calc(18px / 2);
            background: var(--accent);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
