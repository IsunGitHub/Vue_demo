<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(image,index) in swiperImg" :key="index">
      <div v-if="type === 'image'"><img :src="image" alt=""></div>
      <div v-else>{{image}}</div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    swiperImg: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'image'
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .el-carousel {
    margin: 0 auto;
    width: 500px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    width: 500px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
