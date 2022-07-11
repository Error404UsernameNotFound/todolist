const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tfynrv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
