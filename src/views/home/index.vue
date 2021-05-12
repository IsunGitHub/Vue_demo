<template>
  <div class="home_container">
    <h3>轮播图</h3>
    <!-- type设置为image为图片模式  设置为text为文字模式   默认为图片模式-->
    <swiper :swiperImg="images"></swiper>
    <h3>表格</h3>
    <div class="mytable">
    <el-table
      :data="tableData"
      stripe
      border>
      <el-table-column
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
    </el-table>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="display:flex;justify-content:center;margin-top:20px">
    </el-pagination>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper'

export default {
  name: 'homeIndex',
  components: {
    Swiper
  },
  data () {
    return {
      // images: ['图片1', '图片2', '图片2', '图片4', '图片5']
      images: ['https://z3.ax1x.com/2021/05/12/gwPrcD.jpg', 'https://z3.ax1x.com/2021/05/12/gwPx3T.jpg', 'https://z3.ax1x.com/2021/05/12/gwiCDJ.jpg'],
      tableData: [
        {
          id: 1,
          name: 'name1'
        },
        {
          id: 2,
          name: 'name2'
        },
        {
          id: 3,
          name: 'name3'
        },
        {
          id: 4,
          name: 'name4'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.home_container {
  padding: 0 50px;
}
.mytable {
}
h3 {
  text-align: center;
}
</style>
