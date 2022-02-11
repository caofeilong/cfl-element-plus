
import { App, Plugin } from 'vue'
import compA from './compA.vue'

compA.install=function(vue:App){
    vue.component(compA.name,compA)
}
export default  compA as any