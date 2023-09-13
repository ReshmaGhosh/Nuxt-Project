// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  devtools: { enabled: true },

  modules: ["@nuxtjs/i18n"],
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", iso: "en-US", file: "en-US.json" },
      { code: "sv", iso: "sv-SE", file: "sv-SE.json" },
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          home: "Home",
          theService: "The Service",
          benefits: "Benefits",
          contact: "Contact",
        },
        sv: {
          home: "Hem",
          theService: "Tjänsten",
          benefits: "Fördelar",
          contact: "Kontakt",
        },
      },
    },
  },
};
