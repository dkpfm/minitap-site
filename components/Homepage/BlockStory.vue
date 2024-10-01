<template>
    <div id="story" class="wrapper">
        <div class="messages">
            <div class="item big">
                I coded MiniTAP<br />in <span>26 hours</span>!
            </div>
            <div class="item">
                I needed a fun and easy way to control 3D graphics in real time.
                So I challenged myself to code a Chrome Extension in 2 days.
            </div>
            <div class="item">
                It ended up taking longer than expected. Development of the
                extension took 3 days. Design, documentation and promo stuff
                took a few days more.
            </div>
            <div class="item">
                I ended up going from idea to launch in one week!
            </div>
        </div>
        <div class="avatar">
            <img src="/assets/images/avatar.png" />
            <div class="name">Xavier (Jack)</div>
            <div class="username">@kmkota0</div>
            <!-- <Cta label="Watch video" size="small" /> -->
            <div class="actions">
                <Cta
                    to="https://x.com/KMkota0"
                    target="_blank"
                    label="Follow on X"
                    size="small"
                >
                    <IconX />
                </Cta>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: start;
    justify-content: space-between;
    max-width: 860px;
    width: calc(100vw - 40px);
    background: #fff;
    margin: 100px 20px;
    /* box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.05); */
    border-radius: 60px;
    padding: 50px;

    @media (max-width: $mq-size) {
        flex-direction: column;
        padding: 0px;
        border-radius: 40px;
        background: transparent;
        justify-content: center;
        align-items: center;
    }

    .messages {
        display: flex;
        align-items: space-between;
        justify-content: center;
        flex-direction: column;
        max-width: 420px;
        gap: 10px;

        @media (max-width: $mq-size) {
            gap: 5px;
            align-items: center;
        }

        > .item {
            background: #0a6bea;
            padding: 30px;
            color: white;
            border-radius: 40px;
            font-size: 24px;
            line-height: 1.2em;
            text-wrap: pretty;
            font-weight: 500;

            @media (max-width: $mq-size) {
                border-radius: 30px;
                font-size: 18px;
                padding: 20px;
                width: 90%;
            }

            &.big {
                font-size: 60px;
                font-weight: 900;
                line-height: 1.1em;
                span {
                    background: black;
                    border-radius: 15px;
                    padding: 0 10px 2px;
                    white-space: nowrap;
                    margin: 0 -5px;
                }
                @media (max-width: $mq-size) {
                    font-size: 40px;
                }
            }
        }
        .actions {
            padding: 20px;
            display: flex;
            gap: 5px;
            align-items: center;
            justify-content: center;

            @media (max-width: $mq-size) {
                padding: 20px 0;
            }
        }
    }
    .avatar {
        /* width: fit-content; */
        display: flex;
        flex-direction: column;
        align-items: center;
        /* gap: 10px; */

        .name {
            margin: 20px 0 0;
            font-weight: 800;
            font-size: 24px;
            letter-spacing: -0.5px;
        }
        .username {
            /* margin: 20px 0 0; */
            /* font-weight: 800; */
            font-size: 18px;
            font-weight: 500;
            opacity: 0.5;
            margin: 0 0 20px;
            /* letter-spacing: -0.5px; */
        }

        @media (max-width: $mq-size) {
            margin: 20px auto;
        }
        img {
            zoom: 0.5;
            transform: translateX(-6%);
            @media (max-width: $mq-size) {
                zoom: 0.25;
            }
        }
    }
}
</style>
