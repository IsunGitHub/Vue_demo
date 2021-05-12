<template>
  <div class="layout_container">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/home">页面1</el-menu-item>
      <el-menu-item index="/mytable">页面2</el-menu-item>
      <el-menu-item style="float:right" @click="logout">退出登录</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeIndex: '/home'
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="" scoped>

</style>
