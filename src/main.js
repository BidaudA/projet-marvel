import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import stringMixin from './mixins/string.js'
import store from './store'

const myApp = createApp(App).use(store)
myApp.mixin(stringMixin)

myApp.mount('#app')
