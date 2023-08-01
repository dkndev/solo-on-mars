import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card';
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, {ripple: true})
  nuxtApp.vueApp.use(createPinia, {ripple: true})
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('Dialog', Dialog)
})
