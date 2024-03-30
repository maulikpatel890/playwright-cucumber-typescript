import { Locator, Page, expect } from "@playwright/test";
import path = require("path");

class Actions {
    
   //Element Actions

    async clickElement(element:Locator) {
        await element.click();
    }
    
    async waitAndClickElement(element:Locator, delayTime:any) {
        await element.click({ delay: delayTime });
    }

    async forceClickElement(element:Locator) {
        await element.click({ force: true });
    }

    async doubleClickElement(element:Locator) {
        await element.dblclick();
    }

    async rightClickElement(element:Locator) {
        await element.click({ button: 'right' });
    }
    
    async fillElement(element:Locator, input:any) {
        await element.fill(input);
    }

    async pressEnterOnElement(element:Locator) {
        await element.press('Enter');
    }

    async checkElement(element:Locator) {
        await element.check();
    }

    async uncheckElement(element:Locator) {
        await element.uncheck();
    }

    async selectElementByValue(element:Locator, optionValue:string) {
        await element.selectOption(optionValue);
    }

    async selectElementByLabelName(element:Locator, labelName:string) {
        await element.selectOption({ label:labelName});
    }

    async hoveOverElement(element:Locator) {
        await element.hover();
    }

    async focusElement(element:Locator) {
        await element.focus();
    }

    async uploadFile(element:Locator, fileName:string) {
        await element.setInputFiles(path.join(__dirname, fileName));
    }

    async dragNDrop(sourceElement:Locator, destElement:Locator) {
        await sourceElement.dragTo(destElement);
    }

    async scrollIntoView(element:Locator) {
        await element.scrollIntoViewIfNeeded();
    }

    async takeScreenshot(element:Locator) {
        await element.screenshot();
    }

    //Page Actions

    async navigateToUrl(page:Page, url:string) {
        await page.goto(url);
    }

    

}

export const actions = new Actions();