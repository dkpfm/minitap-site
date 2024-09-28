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
    min-width: 1200px;
    justify-content: space-between;
    border-top: 1px solid rgba(white, 0.2);
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
        color: rgba(white, 0.5);
        strong {
            color: rgba(white, 1);
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
</style>
