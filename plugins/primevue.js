import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import Button from 'primevue/button'
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';
import ConfirmPopup from 'primevue/confirmpopup';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';



export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, {ripple: true})
  nuxtApp.vueApp.use(createPinia)

  nuxtApp.vueApp.use(ConfirmationService)
  nuxtApp.vueApp.use(ToastService)

  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.component('ConfirmPopup', ConfirmPopup)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog)
})
