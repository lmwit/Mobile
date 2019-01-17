<template>
    <div class="footer-guide">
        <span class="guide-item" :class="{activeColor: '/info' === $route.path}" @click="goTo('/info')">
            <span class="guide-icon">
                <i class="iconfont icon-message"></i>
            </span>
            <span>消息</span>
        </span>
        <span class="guide-item" :class="{activeColor: '/tongxunlu' === $route.path}" @click="goTo('/tongxunlu')">
            <span class="guide-icon">
                <i class="iconfont icon-tongxunlu"></i>
            </span>
            <span class="guide-desc">通讯录</span>
        </span>
         <span class="guide-item" :class="{activeColor: '/faxian' === $route.path}" @click="goTo('/faxian')">
            <span class="guide-icon">
                <i class="iconfont icon-faxian"></i>
            </span>
            <span class="guide-desc">发现</span>
        </span>
         <span class="guide-item" :class="{activeColor: '/me' === $route.path}" @click="goTo('/me')">
            <span class="guide-icon">
                <i class="iconfont icon-wo1"></i>
            </span>
            <span class="guide-desc">我</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'footerGuide',
    mounted () {
        let that = this;
        console.log(this.$route);
    },
    methods: {
        goTo (path) {
            this.$router.replace(path)
        }
    },
}
</script>

<style scoped>
    .footer-guide {
        width: 100%;
        height: 60px;
        position: fixed;
        bottom:0;
        background:#F0F0F0;
        display: flex;
    }
    .footer-guide .guide-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
    }
    .guide-item .guide-icon {
        margin: 5px;
    }
    .guide-item .guide-icon .iconfont {
        font-size: 25px;
    }
     /* 鼠标选中状态呈现绿色标识 */
    .activeColor {
        color: #02a774;
    }
</style>