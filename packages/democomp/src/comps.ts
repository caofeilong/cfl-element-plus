
import { App } from 'vue'
import compA   from './compA'
import compB  from './compB'

export default {
    install(vue:App){
        vue.component(compA.name, compA)
        vue.component(compB.name, compB)
    }
}