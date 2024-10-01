<template>
    <div class="wrapper" id="demos">
        <div class="pretitle">One more thing...</div>
        <h3>It's Open Source!</h3>
        <Cta
            label="View on Github"
            type="inverted"
            to="https://github.com/dkpfm/minitap"
            target="_blank"
            ><IconGithub :scale="1.5"
        /></Cta>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    /* min-height: 100vh; */
    padding: 120px 0 100px;
    max-width: 100%;

    @media (max-width: $mq-size) {
        padding: 0;
    }

    .pretitle {
        font-size: 52px;
        font-weight: 700;
        color: white;
        margin-bottom: 20px;
        line-height: 1em;

        @media (max-width: $mq-size) {
            font-size: 28px;
        }
    }

    > h3 {
        font-size: 120px;
        font-weight: 700;
        margin: 0 0 40px;
        letter-spacing: -2px;
        color: white;
        background: black;
        line-height: 1em;
        padding: 0 20px 15px;
        border-radius: 25px;
        @media (max-width: 1200px) {
            font-size: 64px;
            padding: 0 20px 10px;
            border-radius: 20px;
        }
        @media (max-width: $mq-size) {
            font-size: 38px;
            letter-spacing: -1px;
            border-radius: 15px;
            padding: 8px 10px 12px;
            margin: 0 0 20px;
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
</style>
