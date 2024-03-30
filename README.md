# Playwright (TS binding) + Cucumber (BDD)

Cucumber is a widely used behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format. 
TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

## Features

1. Playwright framework for e2e test automation
2. Support TypeScript with Cucumber integration
3. Design pattern - Page object model
4. Ready to use actions
5. Ready to use assertions
6. Execute tests on multiple environments (example: dev, staging, prod)
7. Parallel execution
8. Rerun only failed features
9. Awesome report with screenshots, videos & logs
10. Retry failed tests on CI
11. Github Actions integrated with downloadable report
12. On demand tests run using Cucumber tags


## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- config - Contains cucumber config
- src
    -> helper - Contains all the setup, configurations, test data, actions, assertions code
    -> hooks - Contains all before and after hook tasks
    -> page - Contains all page elements and actions on elements
    -> test - Contains all the feature files & step definations
- test-results -> Contains all the reports related file

## Sample report
<img width="1510" alt="image" src="https://github.com/maulikpatel890/playwright-cucumber-typescript/assets/45584539/f282a861-3a16-46bb-a88b-a380f2649301">



## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm install` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to execute the tests
6. To run a specific or group of tests, Use scripts available in package.json
```
npm run test:smoke
```

### Folder structure
0. `src\pages` -> All the pages (UI screen)
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
5. `src\helper\env` -> Multiple environments are handled
6. `src\helper\types` -> To get environment code suggestions
7. `src\helper\report` -> To generate the report
8. `config/cucumber.js` -> One file to do all the magic
9. `package.json` -> Contains all the dependencies
10. `src\helper\util` -> Read test data from json & logger
11. `src\helper\wrapper` -> Contains all ready to use actions and assertions

## Tutorials
1. Learn Playwright - [Playwright](https://playwright.dev/)
