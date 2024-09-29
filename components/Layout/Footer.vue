<template>
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
</template>

<style lang="scss" scoped>
footer {
    display: flex;
    min-width: 800px;
    justify-content: space-between;
    border-top: 1.5px solid rgba(white, 0.5);
    padding: 40px 20px;
    font-size: 14px;
    letter-spacing: -0.2px;

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
</style>
