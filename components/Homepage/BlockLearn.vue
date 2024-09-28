<template>
    <div class="wrapper">
        <div class="video-block">
            <h3>Learn in 5 min.</h3>
            <Cta label="Watch video" />
        </div>
        <nav>
            <Cta label="Quick intro" size="small" type="normal" />
            <Cta label="Keyboard controls" size="small" type="faded" />
            <Cta label="How to connect" size="small" type="faded" />
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.video-block {
    width: 1100px;
    height: 660px;
    border-radius: 40px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > h3 {
        font-size: 80px;
        font-weight: 700;
        margin: 0;
        letter-spacing: -1.5px;
    }
}
nav {
    padding: 60px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>
