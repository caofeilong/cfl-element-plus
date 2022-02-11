import { App } from 'vue'
import compB from './compB.vue'

compB.install=function(app:App){

    app.component(compB.name, compB)
}

export default compB as any