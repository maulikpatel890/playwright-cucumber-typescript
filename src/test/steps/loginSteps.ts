import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import {assertions} from "../../playwrappers/assertions";
import {actions} from "../../playwrappers/actions";
import * as testDataStaging from "../../helper/util/test-data/staging/loginUser.json";
import * as testDataProd from "../../helper/util/test-data/prod/loginUser.json";


setDefaultTimeout(60 * 1000 * 2)

let loginPage: LoginPage

const environment = process.env.ENV || 'staging';
let testData: any;

if (environment === 'staging') {
  testData = testDataStaging;
} else if (environment === 'prod') {
  testData = testDataProd;
} else {
  throw new Error(`Invalid environment specified: ${environment}`);
}

Given('User navigates to the application', async function () {
    await actions.navigateToUrl(fixture.page, process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

Given('{string} User enters the username', async function (userType) {
    loginPage = new LoginPage(fixture.page);
    if(userType==='standard_user'){
        await loginPage.enterUserName(testData.standardUser);
    }
    else if(userType==='locked_out_user'){
        await loginPage.enterUserName(testData.lockedOutUser);
    }
    else {
        console.log('Unknown userType:', userType);
    }
});

Given('User enters the valid password', async function () {
    loginPage = new LoginPage(fixture.page);
    await loginPage.enterPassword(testData.password);
})

Given('User enters the invalid password', async function () {
    loginPage = new LoginPage(fixture.page);
    await loginPage.enterPassword(testData.invalidPassword);
})

When('User clicks on the login button', async function () {
    loginPage = new LoginPage(fixture.page);
    await loginPage.clickLoginButton();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    // await fixture.page.waitForTimeout(2000);
});


Then('Verify that login should be successful', async function () {
    loginPage = new LoginPage(fixture.page);
    await assertions.assertElementIsVisible(loginPage.Elements.filterInPostLoginScreen);
})

Then('Verify error message for login with invalid password', async function () {
    loginPage = new LoginPage(fixture.page);
    await assertions.assertElementIsVisible(loginPage.Elements.alertOnLogin);
    await assertions.assertElementContainsText(loginPage.Elements.alertOnLogin, 'Epic sadface: Username and password do not match any user in this service');
});
