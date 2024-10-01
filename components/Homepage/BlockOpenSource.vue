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
    padding: 100px 0 80px;
    max-width: 100%;

    .pretitle {
        font-size: 52px;
        font-weight: 700;
        color: white;
        margin-bottom: 20px;
    }

    > h3 {
        font-size: 120px;
        font-weight: 700;
        margin: 0 0 40px;
        letter-spacing: -2px;
        line-height: 1em;
        /* small {
            font-size: 50px;
            line-height: 0.7em;
            font-weight: 500;
            opacity: 0.5;
        } */

        letter-spacing: -2px;
        color: white;
        background: black;
        line-height: 1em;
        padding: 0 20px 15px;
        border-radius: 25px;
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
