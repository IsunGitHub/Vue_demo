<template>
  <el-dialog
  title="新建"
  :visible="isShow"
  width="50%"
  @close="$emit('close')">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="ID">
      <el-input v-model.trim="form.id"></el-input>
    </el-form-item>
    <el-form-item label="名字">
      <el-input v-model.trim="form.name"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="$emit('close')">取 消</el-button>
    <el-button type="primary" @click="$emit('addUser',form)">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'add',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    add () {
      console.log(222)
    }
  }
}
</script>

<style lang="" scoped>

</style>
