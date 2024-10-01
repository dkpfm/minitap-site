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
    padding: 0 0 0;
    width: 100%;
    background: black;
}
footer {
    display: flex;
    width: 800px;
    max-width: 100%;
    justify-content: space-between;
    border-top: 1.5px solid rgba(white, 0.1);
    padding: 40px 20px;
    font-size: 14px;
    letter-spacing: -0.2px;
    background: black;
    margin-top: 50px;

    @media (max-width: $mq-size) {
        text-align: center;
        font-size: 10px;
        flex-direction: column;
        gap: 10px;
    }
    .icon {
        position: relative;
        top: -7px;
        @media (max-width: $mq-size) {
            display: none;
        }
    }

    > div {
        display: flex;
        gap: 15px;
        color: rgba(white, 0.5);
        strong {
            color: rgba(white, 1);
        }
        @media (max-width: $mq-size) {
            flex: 1;
            width: 100%;
            justify-content: center;
            text-align: center;
        }
    }
    a {
        color: rgba(white, 0.5);
        text-decoration: none;
        &:hover {
            color: rgba(white, 1);
        }
    }
}
.preview-filler {
    margin-top: 50px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1200px) {
        max-width: 700px;
        margin: 0px 0 100px;
        height: 200px;
    }
    @media (max-width: $mq-size) {
        margin: 0px 0 20px;
    }
}
.preview {
    width: 1200px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3));

    @media (max-width: 1200px) {
        position: absolute;
        right: 20px;
        left: auto;
        /* top: 100px; */
    }
}
</style>
