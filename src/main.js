import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入通用样式
import '@/style/common.less'

// element组件引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
