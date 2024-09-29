<template>
    <div class="layout">
        <LayoutHeader />
        <main>
            <slot />
        </main>
    </div>
</template>

<style lang="scss" scoped>
main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    max-width: 100%;
    overflow-x: hidden;
}
</style>
