<template>
    <div id="demos" class="wrapper">
        <h3>Try it out!</h3>
        <!-- <p>
            <strong>Play and learn in the wild.</strong><br />Here’s a couple of
            demo projects.
        </p> -->
        <div class="demos">
            <div class="item">
                <div class="box">
                    <div class="title">BallMess</div>
                    <p>3D visuals with Three.js</p>
                    <div class="thumb"></div>
                </div>
                <Cta size="small" label="Visit demo" />
            </div>
            <div class="item">
                <div class="box">
                    <div class="title">Donkick</div>
                    <p>Sampler with Tone.js</p>
                    <div class="thumb"></div>
                </div>
                <Cta size="small" label="Visit demo" />
            </div>
        </div>
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
        color: rgba(black, 0.5);
        letter-spacing: -0.5px;
        > strong {
            color: rgba(black, 1);
        }
    }
}
.demos {
    margin: 50px 0;
    display: flex;
    gap: 40px;

    > .item {
        width: 320px;
        display: flex;
        align-items: center;
        /* justify-content: center; */
        flex-direction: column;
        gap: 20px;

        > .box {
            background-image: linear-gradient(180deg, #ffffff 0%, #dbdbff 100%);
            border: 0.75px solid #707085;
            box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
            border-radius: 30px;
            padding: 30px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;

            > .title {
                font-size: 52px;
                font-weight: 900;
                letter-spacing: -3px;
                font-style: italic;
                line-height: 1.2em;
            }
            > p {
                font-weight: 500;
                font-size: 18px;
                margin-bottom: 30px;
            }
            > .thumb {
                width: 250px;
                height: 250px;
                border-radius: 50%;
                background: #171717;
            }
        }
    }
}
</style>
