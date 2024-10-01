<template>
    <NuxtLink
        :class="{ cta: true, [size]: true, [type]: true }"
        :to="to || '/'"
        :target="target"
    >
        <div class="icon">
            <div class="circ">
                <slot></slot>
            </div>
        </div>
        {{ label }}
    </NuxtLink>
</template>

<script setup>
defineProps(["label", "size", "type", "to", "target"]);
</script>

<style lang="scss" scoped>
.cta {
    height: 56px;
    border-radius: calc(56px / 2);
    background: black;
    display: flex;
    text-decoration: none;
    color: white;
    align-items: center;
    justify-content: center;
    padding: 0 30px 0 10px;
    gap: 15px;
    font-size: 18px;
    font-weight: 600;
    width: fit-content;
    white-space: nowrap;
    &.small {
        height: 44px;
        border-radius: calc(44px / 2);
        font-size: 16px;
        gap: 10px;

        @media (max-width: $mq-size) {
            padding: 0 20px 0 10px;
        }

        > .icon {
            width: 28px;
            height: 28px;
            border-radius: calc(28px / 2);
            > .circ {
                width: 18px;
                height: 18px;
                border-radius: calc(18px / 2);
            }
        }
    }
    &.faded {
        background: rgba(black, 0.1);
        color: black;
    }
    &.inverted {
        background: white;
        color: black;
    }
    .icon {
        width: 38px;
        height: 38px;
        border-radius: calc(38px / 2);
        background: var(--accent-faded);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        .circ {
            width: 28px;
            height: 28px;
            background: var(--accent);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: calc(28px / 2);
        }
    }
}
</style>
