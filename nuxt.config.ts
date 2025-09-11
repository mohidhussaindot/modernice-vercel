
import { defineNuxtConfig } from "nuxt/config"; // ✅ Import type for TS
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineNuxtConfig({
  css: [
    "~/assets/tailwind.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/autoplay",
  ],
   typescript: {
    shim: false
  }
,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["swiper"],
    },
  },

  build: {
    transpile: ["vue-toastification", "swiper"],
  },

  alias: {
    "@atoms": resolve(__dirname, "components/atoms"),
    "@molecules": resolve(__dirname, "components/molecules"),
    "@organisms": resolve(__dirname, "components/organisms"),
    "@templates": resolve(__dirname, "components/templates"),
  },

  components: [
    { path: "~/components/atoms", prefix: "atoms" },
    { path: "~/components/molecules", prefix: "molecules" },
    { path: "~/components/organisms", prefix: "organisms" },
    { path: "~/components/templates", prefix: "templates" },
  ],

  compatibilityDate: "2025-01-25",

  modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/i18n"],

  plugins: [
    "~/plugins/customLoading.ts",
    "~/plugins/gsap.client.ts",
    "~/plugins/i18n-persist.client.ts",
    "~/plugins/progress-bar.ts",
    "~/plugins/countryDisplay.ts",
  ],
});
