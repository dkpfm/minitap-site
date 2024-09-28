<template>
    <div class="wrapper">
        <h3 id="demos">
            <small>One more thing...</small><br />It's Open Source!
        </h3>
        <Cta
            label="View on Github"
            type="inverted"
            to="https://github.com/dkpfm/minitap"
        />
        <div class="flex-fill"></div>
        <div class="preview">
            <Controller />
        </div>
    </div>
</template>

<script setup>
import Controller from "./extension/src/components/Controller.vue";
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    min-height: 75vh;
    padding: 80px 0 80px;

    > h3 {
        font-size: 120px;
        font-weight: 700;
        margin: 0 0 40px;
        letter-spacing: -2px;
        line-height: 1em;
        small {
            font-size: 50px;
            line-height: 0.7em;
            font-weight: 500;
            opacity: 0.5;
        }
    }
    > p {
        font-size: 32px;
        font-weight: 700;
        line-height: 1em;
        /* color: rgba(black, 0.5); */
        letter-spacing: -0.5px;
        > strong {
            color: rgba(black, 1);
        }
    }
}
.preview {
    width: 1200px;
    /* filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3)); */
}
</style>
