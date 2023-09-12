// https://nuxt.com/docs/api/configuration/nuxt-config


export default {
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "sv"],
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
