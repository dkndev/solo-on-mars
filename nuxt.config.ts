// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
    devtools: {enabled: true},
    app: {
        baseURL: '/solo-on-mars/'
    },
    target: 'static',
    router: {
        base: '/solo-on-mars/'
    },
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
        '~/assets/css/main.css'
    ],
    build: {
        transpile: ['primevue']
    },
    ssr: false,
    builder: 'webpack',
    modules: [
        '@pinia/nuxt',
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    imports: {
        dirs: ['stores']
    }
}
