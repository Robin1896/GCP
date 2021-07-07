// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import Vue from 'vue';
// import aframe from 'aframe';

// import '~/assets/aframe.min.js';
// import '@fortawesome/fontawesome-free/css/all.css';
// import '@fortawesome/fontawesome-free/js/all.js';
import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas);
library.add(fab);
library.add(far);
library.add(faWhatsapp);

// Register the component globally
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  target: "static",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Green Challenge Popup",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/styles.css",
    "@/assets/styles.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/vue-carousel-3d", ssr: false },
    { src: "~/plugins/fontawesome.js", ssr: false }
    // { src: "~/plugins/vue-sweetalert2.js", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome"
  ],

  fontawesome: {
    icons: ["faCoffee", "faTimes", "faEnvelope", "fabWhatsapp"]
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["nuxt-sweetalert2"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
