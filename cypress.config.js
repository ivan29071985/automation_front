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
    numTestsKeptInMemory: 5,
    retries: {
      runMode: 5,
      openMode: 3
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {
          launchOptions.args.push(
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-software-rasterizer',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            '--no-sandbox',
            '--js-flags=--expose-gc'
          );
        }
        return launchOptions;
      });

      on('task', {
        clearMemory() {
          if (global.gc) {
            global.gc();
          }
          return null;
        },

        // Limpa sessões do Cypress
        clearSessions() {
          return null;
        },

        // Limpa a pasta de downloads
        clearDownloads() {
          const downloadsFolder = config.downloadsFolder;
          if (fs.existsSync(downloadsFolder)) {
            fs.readdirSync(downloadsFolder).forEach(file => {
              fs.unlinkSync(path.join(downloadsFolder, file));
            });
          }
          return null;
        },

        // Pega o caminho completo do arquivo mais recente
        getLatestDownloadedFile() {
          const downloadsFolder = config.downloadsFolder;

          if (!fs.existsSync(downloadsFolder)) {
            return null;
          }

          const files = fs.readdirSync(downloadsFolder);
          const xlsxFiles = files.filter(f => f.endsWith('.xlsx') || f.endsWith('.xls'));

          if (xlsxFiles.length === 0) return null;

          const sortedFiles = xlsxFiles.map(file => ({
            name: file,
            fullPath: path.join(downloadsFolder, file),
            time: fs.statSync(path.join(downloadsFolder, file)).mtime.getTime()
          })).sort((a, b) => b.time - a.time);

          return sortedFiles[0].fullPath;
        },

        // Lê o conteúdo do Excel com base no caminho completo
        readExcelFile(filePath) {
          if (!fs.existsSync(filePath)) {
            throw new Error(`Arquivo não encontrado: ${filePath}`);
          }

          return fs.readFileSync(filePath, 'base64');
        }
      });

      if (config.env.allure) {
        allureWriter(on, config, {
          reportDir: 'allure-results',
          reportTitle: 'Automation Report Amei',
          testCasePrefix: 'TC-',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
          addAnalyticLabels: true,
          addRetryAnalyticLabels: true,
        });
      }

      config.env.MAILOSAUR_API_KEY = config.env.MAILOSAUR_API_KEY || process.env.MAILOSAUR_API_KEY;
      config.env.MAILOSAUR_SERVER_ID = config.env.MAILOSAUR_SERVER_ID || process.env.MAILOSAUR_SERVER_ID || 'pcph7thc';

      const environment = process.env.CYPRESS_ENV || config.env.environment || 'homologacao';
      config.baseUrl = config.env.baseUrl[environment] || 'https://amei-homolog.amorsaude.com.br';
      config.env.environment = environment;

      return config;
    }
  },
  env: {
    environment: 'development',
    baseUrl: {
      development: 'https://amei-homolog.amorsaude.com.br/auth/login',
      staging: 'https://amei-staging.amorsaude.com.br',
      producao: 'https://amei.amorsaude.com.br'
    },
    failOnStatusCode: false,
  }
});