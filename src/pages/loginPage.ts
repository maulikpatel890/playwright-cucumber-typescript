import { Page, Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import {actions} from "../playwrappers/actions";


export default class LoginPage {

    private base: PlaywrightWrapper


    readonly liveAuctionLink: Locator;
    readonly userNameInputBx: Locator;
    readonly passwordInputBx: Locator;
    readonly loginBtn: Locator;
    readonly TBLogoPostLogin: Locator;
    readonly alertOnLogin: Locator;
    readonly filterInPostLoginScreen: Locator;

  
    constructor(private page: Page) {
      this.base = new PlaywrightWrapper(page);
    }

    Elements = {

      userNameInputBx: this.page.locator("#user-name"),
      passwordInputBx : this.page.locator("#password"),
      loginBtn: this.page.locator('[type="submit"][data-test="login-button"]'),
      alertOnLogin: this.page.locator('[data-test="error"]'),
      filterInPostLoginScreen:  this.page.locator('select[data-test="product-sort-container"]')
    }

    async enterUserName(userName: string) {
        await actions.waitAndClickElement(this.Elements.userNameInputBx, 2000);
        await actions.fillElement(this.Elements.userNameInputBx, userName);
    }
    async enterPassword(Password: string) {
        await actions.fillElement(this.Elements.passwordInputBx, Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }

    async loginUser(userName: string, password: string) {
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


}