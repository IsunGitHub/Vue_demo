<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_title">登录</div>
      <div class="login_form">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model.trim="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="passwrod">
            <el-input v-model.trim="loginForm.passwrod" type="password" placeholder="密码" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
           <el-form-item>
            <el-button type="primary" @click="login">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginIndex',
  data () {
    return {
      loginForm: {
        username: 'admin',
        passwrod: '123456'
      },
      loginRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名3-10位', trigger: 'blur' }
        ],
        passwrod: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 2, max: 6, message: '密码2-6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.loginForm.username === 'admin' && this.loginForm.passwrod === '123456') {
            this.$message.success('登录成功')
            this.$router.push('/home')
          } else {
            this.$message.error('用户名或密码错误')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
  width: 100%;
  height: 100%;
  .login_box {
    width: 550px;
    height: 400px;
    .login_title {
      margin-top: 40px;
      margin-bottom: 20px;
      text-align: center;
      font-size: 28px;
      color: #fff;
      font-weight: 700;
    }
    .login_form {
      padding: 0px 50px;
      /deep/ .el-input__inner {
        background-color: #283443;
        color:#fff;
        border:1px solid #384352;
      }
      .el-button {
        width: 100%;
      }
    }
  }
}

</style>
