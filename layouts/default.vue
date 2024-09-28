<template>
    <div class="layout">
        <LayoutHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.layout {
}
main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
}
</style>
