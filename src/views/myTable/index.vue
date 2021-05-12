<template>
  <div class="mytable_container">
    <el-button type="primary" size="small" @click="isShowAdd = true">新建</el-button>
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
      <el-table-column
      label="操作">
        <template v-slot="{row}">
          <el-button type="primary" size="mini" @click="del(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <add :isShow="isShowAdd" v-if="isShowAdd" @close="isShowAdd = false" @addUser="addUser"></add>
  </div>
</template>

<script>
import Add from './components/Add'
export default {
  name: '',
  components: {
    Add
  },
  data () {
    return {
      isShowAdd: false,
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
    addUser (data) {
      this.tableData.push(data)
      this.isShowAdd = false
    },
    del (id) {
      this.tableData.forEach((item, index) => {
        if (item.id === id) {
          this.tableData.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mytable_container {
  padding: 50px;
  .el-table {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
