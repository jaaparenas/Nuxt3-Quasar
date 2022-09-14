import { defineNuxtConfig } from 'nuxt'
import { quasar } from "@quasar/vite-plugin";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "~/assets/styles/quasar.sass",
        "@quasar/extras/roboto-font/roboto-font.css",
        "@quasar/extras/material-icons/material-icons.css",
    ],
    build: {
        transpile: ["quasar"],
    },
    vite: {
        plugins: [
            quasar({
                sassVariables: "assets/styles/quasar.variables.sass",
            }),
        ],
    },
})
