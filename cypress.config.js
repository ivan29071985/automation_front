const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    failOnStatusCode: false,
    downloadsFolder: 'cypress/downloads',
    chromeWebSecurity: false,
    screenshots: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    retries: { runMode: 5, openMode: 3 },

    setupNodeEvents(on, config) {
      if (config.env.allure) {
        allureWriter(on, config, {
          reportDir: 'allure-results',
          reportTitle: 'Automation Report Amei',
          testCasePrefix: 'TC-',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
        });
      }

      // Pegando o commit para definir o ambiente
      let commitMessage = process.env.GIT_COMMIT_MESSAGE || '';
      commitMessage = commitMessage.toLowerCase();

      let environment = 'staging'; // default
      if (commitMessage.includes('[hml]')) environment = 'homologacao';
      if (commitMessage.includes('[stg]')) environment = 'staging';
      if (commitMessage.includes('[prd]')) environment = 'producao';

      const baseUrls = {
        homologacao: 'https://amei-homolog.amorsaude.com.br',
        staging: 'https://amei-staging.amorsaude.com.br',
        producao: 'https://amei.amorsaude.com.br'
      };

      config.baseUrl = baseUrls[environment];
      config.env.environment = environment;

      return config;
    }
  },
  env: {
    environment: 'staging'
  }
});
