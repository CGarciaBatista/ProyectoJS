import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/Ui/BaseCard.vue'
import CardButton from '../src/components/Ui/CardButton.vue'
const app = createApp(App)

app.component('base-card', BaseCard)
app.component('card-button', CardButton)
app.mount('#app')
