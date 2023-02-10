import { defineConfig } from "cypress";
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { writeFileSync } = require('node:fs')

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("before:browser:launch", (_, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((lighthouseResult) => {
          debugger
          // `.report` is the HTML report as a string
          const reportHtml = lighthouseResult.report;
          writeFileSync(__dirname + `/lighthouse/${process.env.APP_NAME}.html`, reportHtml);
        }),
      });
    },
  },
});
