const report = require("multiple-cucumber-html-reporter");
        
report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Sauce Demo Website test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Maulik - MACBOOK PRO",
        platform: {
            name: "Darwin",
            version: "14.1",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Sauce Demo Website Application" },
            { label: "Test Cycle", value: "E2E Test" }
        ],
    },
});
