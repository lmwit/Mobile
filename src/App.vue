<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/footerGuide'
import jwt_decode from 'jwt-decode'

export default {
    name: 'app',
    components: {
        FooterGuide
    },
    created () {
        let that = this;
        if (localStorage.wxToken) {
            const decode = jwt_decode(localStorage.wxToken)
            that.$store.dispatch('set_users', decode)
        }
    }
}
</script>

<style>
html,body,#app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
