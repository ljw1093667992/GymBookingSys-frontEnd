<template>
  <div>
    <div class="green_bg">
      <i class='el-icon-arrow-left' @click='back()'>返回首页</i>
      <div class="title">中央身份验证服务(CAS)</div>
      <div class="login_input">
        <div class="login_user">NetID(网络身份标识)：</div>
        <span :class='{accountTip:true}' v-html='accountTipText' ></span>
        <input type="text" placeholder="账号长度为8~25位，必须包含字母、数字" v-model='account' maxLength='25' @keyup='accountConfirm()'>
        <label class="login_password" for="pwd">密  码：</label>
        <span :class='{pwdTip:pwdTipCtrl}' v-html='pwdTipText'> </span>
        <input type="text" placeholder="密码长度为8~25位" id='pwd' maxLength='25' v-model='pwd' @keyup='pwdConfirm()'>
        <label class="login_password" for="confirmPwd">确认密码：</label>
        <span :class='{pwdTwiceTip:true}' v-html='pwdTwiceTipText'> </span>
        <input type="text" placeholder="密码确认" id='confirmPwd' maxLength='25' v-model='pwdTwice' @keyup='pwdTwiceFunc()'>
        <el-radio class='el-radio' v-model='radio' label="0" @change='getRole()'>普通用户</el-radio>
        <el-radio class='el-radio' v-model='radio' label="1" @change='getRole()'>管理员</el-radio>
        <el-button type="success" :plain="true"  @click='register()'>注册</el-button>
      </div>
     </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      pwd: "",
      pwdTwice: "",
      accountTipCtrl: true,
      accountTipText: "",
      pwdTipCtrl: true,
      pwdTipText: "",
      pwdTwiceText: "",
      pwdTwiceTipCtrl: true,
      pwdTwiceTipText: "",
      radio: "",
      role: "",
      oridinary: true,
      manager: false,
      roleCtrl: false
    };
  },
  mounted: function() {},
  methods: {
    back() {
      this.$router.push("/");
    },
    // 获取角色值
    getRole() {
      console.log(this.radio);
    },
    //验证用户名
    accountConfirm() {
      // 用户名必须同时包含数字和字母...
      let reg = /^(?!([0-9]+|[a-zA-Z]+)$)[0-9a-zA-Z]{8,25}$/;
      let matchResult = reg.test(this.account)
      if (matchResult) {
        this.accountTipCtrl = false;
        this.accountTipText = "";
      } else {
        this.accountTipCtrl = true;
        this.accountTipText = "账号不符合规范~";
      }
    },
    // 验证密码
    pwdConfirm() {
      const pwdLen = this.pwd.length;
      if (pwdLen >= 5 && pwdLen <= 25) {
        this.pwdTipCtrl = false;
        this.pwdTipText = "";
      } else {
        this.pwdTipCtrl = true;
        this.pwdTipText = "密码不符合规范~";
      }
    },
    // 密码确认
    pwdTwiceFunc() {
      if (this.pwd !== this.pwdTwice) {
        this.pwdTwiceTipCtrl = true;
        this.pwdTwiceTipText = "两次密码不一致~";
      } else {
        this.pwdTwiceTipCtrl = false;
        this.pwdTwiceTipText = "";
      }
    },
    register() {
      // 如果用户名和密码都是可用的
      if (!this.pwdTipCtrl && !this.accountTipCtrl && !this.pwdTwiceTipCtrl) {
        axios
          .post("http://39.108.179.140:8991/user", {
            account: this.account,
            password: this.pwd,
            role: this.radio
          })
          .then(res => {
            console.log(res);
            if (res.data.code === 1) {
              // 点击注册toast
              this.$message({
                message: "注册成功，即将跳转到登录页...",
                center: true,
                onClose: function() {
                  window.location.href = "/login";
                }
              });
            }
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped type="text/css">
$greenColor: #005824;
$lightGreenColor: #007731;
$whiteColor: #fff;
$width: 100%;
$height: 240px;
// modal动画
@keyframes login-modal-animation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.green_bg {
  height: $height;
  width: $width;
  background-color: $greenColor;
  .el-icon-arrow-left {
    cursor: pointer;
    color: #fff;
  }
  .title {
    color: $whiteColor;
    font-weight: bold;
    font-size: 28px;
    text-align: left;
    padding: 10px 0 0 30%;
    /*padding-left: 30%;*/
  }
  .login_input {
    animation: login-modal-animation 1s linear;
    border: 4px solid #72ba64;
    width: 40%;
    margin-top: 20px;
    margin-left: 30%;
    background-color: $whiteColor;

    label {
      display: block;
      margin-top: 20px;
      /*background-color: aquamarine;*/
      padding-left: 10%;
      text-align: left;
    }

    .login_user {
      padding-left: 10%;
      margin-top: 15px;
    }
    .accountTip,
    .pwdTwiceTip,
    .pwdTip {
      color: red;
      display: block;
      margin-left: 10%;
      display: block;
    }
    .el-radio {
      display: inline-block;
    }
    input {
      margin-top: 10px;
      margin-left: 10%;
      border: 1px solid #ccc;
      padding: 10px 0px;
      border-radius: 3px;
      padding-left: 5px;
      display: block;
      /*background-color: aqua;*/
      width: 80%;
      &:focus{
        transform:scaleX(1.1);
        transition:0.3s ease-in;
      }
    }
    button {
      margin: 30px auto;
      display: block;
      background-color: #060;
      width: 80%;
      height: 50px;
      color: white;
      border-radius: 4px;
    }
  }
}
</style>
