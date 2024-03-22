const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: 
        `
          @import "@/global-styles/colors.scss";
          @import "@/global-styles/typography.scss";
        `
      }
    }
  },
});
