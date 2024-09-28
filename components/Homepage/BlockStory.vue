<template>
    <div class="wrapper">
        <h3>Story</h3>
        <p>
            <strong>Play and learn in the wild.</strong><br />Here’s a couple of
            demo projects.
        </p>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    > h3 {
        font-size: 120px;
        font-weight: 700;
        margin: 0;
        letter-spacing: -2px;
    }
    > p {
        font-size: 32px;
        font-weight: 700;
        line-height: 1em;
        color: rgba(black, 0.5);
        letter-spacing: -0.5px;
        > strong {
            color: rgba(black, 1);
        }
    }
}
</style>
