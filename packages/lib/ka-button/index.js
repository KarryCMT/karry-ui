// 导入组件，组件必须声明 name
import KaButton from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
KaButton.install = function (Vue) {
  Vue.component(KaButton.name, KaButton)
}

// 默认导出组件
export default KaButton
