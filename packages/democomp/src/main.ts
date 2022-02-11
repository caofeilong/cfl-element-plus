
import {createApp} from 'vue'
import App from './App.vue'
import compA from './compA/index'
import compB from './compB'

const app= createApp(App)
app.use(compA)
app.use(compB)
app.mount('#app')