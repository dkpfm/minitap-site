<template>
    <div class="footer-section">
        <div class="preview-filler">
            <div class="preview">
                <Controller />
            </div>
        </div>
        <footer>
            <div>
                <img class="icon" src="/assets/images/icon-white.svg" />
                <strong>MiniTAP</strong>
                <div>Built by Xavier (Jack) for Desktop.fm B.V.</div>
            </div>
            <div>
                <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms">Terms of Service</NuxtLink>
            </div>
        </footer>
    </div>
</template>

<script setup>
import Controller from "./extension/src/components/Controller.vue";
</script>

<style lang="scss" scoped>
.footer-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    /* min-height: 100vh; */
    padding: 0px 0 0px;
    width: 100%;
    background: black;
}
footer {
    display: flex;
    min-width: 800px;
    justify-content: space-between;
    border-top: 1.5px solid rgba(white, 0.1);
    padding: 40px 20px;
    font-size: 14px;
    letter-spacing: -0.2px;
    background: black;
    margin-top: 50px;
    .icon {
        position: relative;
        top: -7px;
    }

    > div {
        display: flex;
        gap: 15px;
        color: rgba(white, 0.8);
        strong {
            color: rgba(white, 1);
        }
    }
    a {
        color: rgba(white, 0.8);
        text-decoration: none;
        &:hover {
            color: rgba(white, 1);
        }
    }
}
.preview-filler {
    margin-top: 100px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1200px) {
        height: 250px;
    }
}
.preview {
    width: 1200px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3));

    @media (max-width: 1200px) {
        position: absolute;
        left: 20px;
        /* top: 100px; */
    }

    /* @media (max-width: $mq-size) {
        padding-top: 60px;
        left: -20px;
        top: 0px;
    } */
}
</style>
