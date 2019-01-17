<template>
  <div class="login-warp">
    <div class="register-cancel" @click="$router.go(-1)">取消</div>
    <div class="login-title">注册用户</div>
    <div class="login-content">
      <form>
        <input-info label="昵称" placeholder="例如：小布" v-model="user.name"></input-info>
        <input-info label="邮箱" placeholder="请输入邮箱" v-model="user.email"></input-info>
        <input-info label="密码" placeholder="请输入密码" v-model="user.password" type="password"></input-info>
        <input-info label="确认密码" placeholder="请确认密码" v-model="user.password2" type="password"></input-info>
      </form>
    </div>
    <div class="login-footer">
        <login-btn :disabled="disabled" @click="resgisterClick">注册</login-btn>
    </div>
  </div>
</template>

<script>
import InputInfo from "../components/inpuInfo";
import LoginBtn from '../components/btn';
export default {
  name: "register",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password2: ""
      }
    };
  },
  computed: {
      disabled () {
          if (this.user.name && 
            this.user.email && 
            this.user.password && 
            this.user.password2) {
            return false
          } else {
              return true
          }
      }
  },
  methods: {
      resgisterClick () {
        let that = this;
        let reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        if (!reg.test(that.user.email)) {
            alert("请输入合法的邮箱地址！");
            return;
        }
        if (that.user.password !== that.user.password2) {
            alert("两次密码输入不一致！");
            return;
        }
        that.$axios.post('/api/users/register', that.user)
        .then(res => {
            console.log(res);
            // 注册成功
            alert('注册成功')
            that.$router.push('/login');
        })
      }
  },
  components: {
    InputInfo,
    LoginBtn
  }
};
</script>

<style scoped>
.login-warp {
  width: 100%;
  height: 100%;
  background: url('../assets/background.gif');
  background-size: 100% 100%;
  position: absolute;
  overflow: hidden;
}
.login-warp .register-cancel {
    width: 2rem;
    height: .5rem;
    line-height: .5rem;
    font-size: 1rem;
    border-radius: 1rem;
    color: #fff;
    padding: .6rem; 
    background: deepskyblue;
    position: relative;
    left: .5rem;
    top: .5rem;
}
.login-warp .login-title {
  width: 100%;
  font-size: 1.5rem;
  margin-top: 3rem;
  text-align: center;
  /* background: orange; */
  padding: 0.5rem;
  color:deepskyblue;
}
.login-warp .login-content {
  width: 100%;
  height: 10rem;
  /* background: green; */
}
.login-warp .login-footer {
    margin-top: 5.5rem;
}

</style>