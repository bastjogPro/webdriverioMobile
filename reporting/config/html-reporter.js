const reporter = require('cucumber-html-reporter');

/*
** Génération du rapport
*/

const options = {
  theme: 'hierarchy',
  jsonDir: 'reporting/rapports',
  output: 'reporting/rapports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  screenshotsDirectory: 'reporting/rapports/screenshots/',
  launchReport: true,
  brandTitle: 'Rapport d\'exécution',
  metadata: {
  }
};

reporter.generate(options);