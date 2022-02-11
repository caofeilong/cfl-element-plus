
import {createApp} from 'vue'
import App from './App.vue'
import comps  from '@yz-ui/democomp'

const app =createApp(App)

app.use(comps)
// app.use(compa)

// app.use(compb)
app.mount('#app')