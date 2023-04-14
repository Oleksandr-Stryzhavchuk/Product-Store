const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    viewportHeight: 1000,
    viewportWidth: 1000,
    setupNodeEvents(on, config) {
    },
  },
});
