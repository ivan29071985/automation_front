const { defineConfig } = require("cypress");
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
    retries: { runMode: 5, openMode: 3 },

    setupNodeEvents(on, config) {


      // Tasks úteis
      on('task', {
        clearMemory() {
          if (global.gc) global.gc();
          return null;
        },
        clearSessions() { return null; },
        clearDownloads() {
          const downloadsFolder = config.downloadsFolder;
          if (fs.existsSync(downloadsFolder)) {
            fs.readdirSync(downloadsFolder).forEach(file => {
              fs.unlinkSync(path.join(downloadsFolder, file));
            });
          }
          return null;
        },
        getLatestDownloadedFile() {
          const downloadsFolder = config.downloadsFolder;
          if (!fs.existsSync(downloadsFolder)) return null;
          const files = fs.readdirSync(downloadsFolder);
          const xlsxFiles = files.filter(f => f.endsWith('.xlsx') || f.endsWith('.xls'));
          if (xlsxFiles.length === 0) return null;
          const sortedFiles = xlsxFiles.map(file => ({
            name: file,
            fullPath: path.join(downloadsFolder, file),
            time: fs.statSync(path.join(downloadsFolder, file)).mtime.getTime()
          })).sort((a,b) => b.time - a.time);
          return sortedFiles[0].fullPath;
        },
        readExcelFile(filePath) {
          if (!fs.existsSync(filePath)) throw new Error(`Arquivo não encontrado: ${filePath}`);
          return fs.readFileSync(filePath, 'base64');
        }
      });

let commitMessage = process.env.GIT_COMMIT_MESSAGE || '';
commitMessage = commitMessage.toLowerCase();

let environment = 'staging'; // padrão
if (commitMessage.includes('[hml]')) environment = 'homologacao';
if (commitMessage.includes('[stg]')) environment = 'staging';
if (commitMessage.includes('[prd]')) environment = 'producao';

config.env.environment = environment;

const baseUrls = {
  homologacao: 'https://amei-homolog.amorsaude.com.br/auth/login',
  staging: 'https://amei-staging.amorsaude.com.br/auth/login',
  producao: 'https://amei.amorsaude.com.br/auth/login'
};

config.baseUrl = baseUrls[environment];

console.log(`Ambiente escolhido: ${environment}, Base URL: ${config.baseUrl}`);

      return config;
    }
  },
  env: {
    environment: 'staging'
  }
});
