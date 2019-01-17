<template>
  <div class="login-warp">
    <div class="login-title">用户登录</div>
    <div class="login-content">
      <form>
        <input-info label="邮箱" placeholder="请输入邮箱" v-model="user.email"></input-info>
        <input-info label="密码" placeholder="请输入密码" v-model="user.password" type="password"></input-info>
      </form>
      <div class="login-btn">
          <login-btn :disabled="disabled" @click="loginClick">登录</login-btn>
      </div>
    </div>
    <div class="login-footer">
      <button class="login-btn" @click="$router.push('./register')">|&nbsp;注册账号&nbsp;|</button>
    </div>
  </div>
</template>

<script>
import InputInfo from "../components/inpuInfo";
import LoginBtn from '../components/btn';
import jwt_decode from 'jwt-decode'
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      }
    }
  },
  components: {
    InputInfo,
    LoginBtn
  },
  methods: {
    loginClick () {
        let that = this;
        let reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        if (!reg.test(this.user.email)) {
            alert("请输入合法的邮箱地址！");
            return;
        }
        that.$axios.post('/api/users/login', that.user)
        .then(res => {
            console.log(res);
            const { token } = res.data;
            localStorage.setItem('wxToken', token);

            // 对Token值进行解析
            const decode = jwt_decode(token);
            // console.log(decode);
            
            that.$store.dispatch('set_users', decode)

            that.$router.push('/info');
        })
    }
  },
  computed:{
      disabled() {
          if (this.user.email && this.user.password) return false // false是可以点击
          else return true
      }
  }
};
</script>

<style scoped>
.login-warp {
  width: 100%;
  height: 100%;
  /* background: orange; */
  background: url('../assets/background.gif');
  background-size: 100% 100%;
}
.login-warp .login-title {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  /* background: orange; */
  padding-top: 5rem;
  color:deepskyblue;
}
.login-warp .login-content {
  width: 100%;
  height: 10rem;
  /* background: green; */
}
.login-content .login-btn {
    margin-top: 2rem;
}
.login-warp .login-footer {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 2rem;
  text-align: center;
}
.login-warp .login-footer .login-btn {
  border: none;
  outline: none;
  background-color: transparent;
  color:deepskyblue;
}
</style>