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
                It ended up taking longer than expected. Developemnt of the
                extension took 3 days. Design, documentation and this landing
                took a couple days more.
            </div>
            <div class="item">
                I ended up going from idea to launch in one week! 🙃
            </div>
            <div class="actions">
                <Cta label="Follow on X" size="small" />
                <Cta label="Watch video" size="small" />
            </div>
        </div>
        <div class="avatar">
            <img src="/assets/images/avatar.png" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 860px;
    background: #ececf0;
    /* box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.05); */
    border-radius: 60px;
    padding: 50px;

    .messages {
        display: flex;
        align-items: space-between;
        justify-content: center;
        flex-direction: column;
        width: 420px;
        gap: 10px;

        > .item {
            background: #0a6bea;
            padding: 30px;
            color: white;
            border-radius: 40px;
            font-size: 24px;
            line-height: 1.2em;
            text-wrap: pretty;
            font-weight: 500;

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
            }
        }
        .actions {
            padding: 20px;
            display: flex;
            gap: 5px;
            align-items: center;
            justify-content: center;
        }
    }
    .avatar {
        img {
            zoom: 0.5;
        }
    }
}
</style>
