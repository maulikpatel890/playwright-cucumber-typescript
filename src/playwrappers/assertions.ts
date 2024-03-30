import { Locator, Page, expect } from "@playwright/test";

class Assertions {
    
    //Element Assertions
    async assertElementIsVisible(element:Locator) {
        await expect(element).toBeVisible({ timeout: 10000 });
    }

    async assertElementIsNOTVisible(element:Locator) {
        await expect(element).not.toBeVisible();
    }

    async assertElementContainsText(element:Locator, expectedText:string) {
        await expect(element).toContainText(expectedText);
    }

    async assertElementDoesNotContainText(element: Locator, expectedText:string) {
        await expect(element).not.toContainText(expectedText);
    }

    async assertElementHasText(element:Locator, text:string) {
        await expect(element).toContainText(text, {ignoreCase: false});
    }

    async assertElementHasTextIgnoreCase(element:Locator, text:string) {
        await expect(element).toContainText(text, {ignoreCase: true});
    }

    async assertElementHasInnerText(element:Locator, text:string) {
        await expect(element).toContainText(text, {useInnerText: true});
    }

    async assertElementToHaveText(element:Locator, text:string) {
      await expect(element).toHaveText(text);
  }

    async assertElementNotHaveText(element:Locator, text:string) {
        await expect(element).not.toContainText(text);
    }
    
    async assertButtonIsDisabled(element:Locator) {
        await expect(element).toBeDisabled({ timeout: 10000 });
    }
    
    async assertButtonIsEnabled(element:Locator) {
        await expect(element).toBeEnabled({ timeout: 10000 });
    }
    
    async  assertElementToBeEmpty(element:Locator) {
      await expect(element).toBeEmpty();
    }

    async  assertElementNotEmpty(element:Locator) {
      await expect(element).not.toBeEmpty();
    }

    async  assertElementToBeChecked(element:Locator) {
      await expect(element).toBeChecked();
    }

    async  assertElementNotChecked(element:Locator) {
      await expect(element).not.toBeChecked();
    }

    async assertElementHasAttributeValue(element:Locator, attribute:string, value:string) {
        await expect(element).toHaveAttribute(attribute, value);
    }

    async assertElementHasClass(element:Locator, classValue:string) {
        await expect(element).toHaveClass(classValue);
    }

    async assertElementDoesNotHaveClass(element:Locator, classValue:string) {
      await expect(element).not.toHaveClass(classValue);
    }
    
    async  assertElementToHaveCSS(element:Locator, cssName:string, cssValue:string) {
      await expect(element).toHaveCSS(cssName, cssValue);
    }
    

    //Page Assertions
    
    async  assertPagetoHaveURL(page:Page, url:string) {
      await expect(page).toHaveURL(url);
    }
     
    async  assertPageNotHaveURL(page:Page, url:string) {
      await expect(page).not.toHaveURL(url);
    }

    async  assertPagetoHaveScreenshot(page:Page) {
      await expect(page).toHaveScreenshot();
    }
    
    async  assertPagetoHaveScreenshotWithName(page:Page, imageName:string) {
      await expect(page).toHaveScreenshot(imageName);
    }

    //Generic Assertions
    async assertToEqual(value1:any, value2:any) {
      expect(value1).toEqual(value2);
    }

    async assertNotToEqual(value1:any, value2:any) {
      expect(value1).not.toEqual(value2);
    }

    async assertToBe(value1:any, value2:any) {
      expect(value1).toBe(value2);
    }

    async assertNotToBe(value1:any, value2:any) {
      expect(value1).not.toBe(value2);
    }

    async assertStringContaining(value1:string, value2:string) {
      expect(value1).toEqual(expect.stringContaining(value2));
    }

    async assertStringMatching(value1:string, value2:string) {
      expect(value1).toEqual(expect.stringMatching(value2));
    }

    async assertToBeFalsy(value:boolean) {
      expect(value).toBeFalsy();
    }

    async assertToBeTruthy(value:boolean) {
      expect(value).toBeTruthy();
    }

    async assertToBeGreaterThan(value1:any, value2:any) {
      expect(value1).toBeGreaterThan(value2);
    }

    async assertToBeGreaterThanEqual(value1:any, value2:any) {
      expect(value1).toBeGreaterThanOrEqual(value2);
    }

    async assertToBeLessThan(value1:any, value2:any) {
      expect(value1).toBeLessThan(value2);
    }

    async assertToBeLessThanEqual(value1:any, value2:any) {
      expect(value1).toBeLessThanOrEqual(value2);
    }

    async assertToBeNull(value:any) {
      expect(value).toBeNull();
    }

    async assertNotToBeNull(value:any) {
      expect(value).not.toBeNull();
    }

    async assertToContain(actualValue:any, expectedValue:any) {
      expect(actualValue).toContain(expectedValue);
    }

    async assertToContainEqual(actualValue:any, expectedValue:any) {
      expect(actualValue).toContainEqual(expectedValue);
    }

    async assertArrayContaining(actualValue:any, expectedValue:any) {
      expect(actualValue).toEqual(expect.arrayContaining(expectedValue));
    }

    async assertArrayNotContaining(actualValue:any, expectedValue:any) {
      expect(actualValue).not.toEqual(expect.arrayContaining(expectedValue));
    }

    async assertToHaveLength(value:any, expectedLength:any) {
      expect(value).toHaveLength(expectedLength);
    }

    async assertToMatch(value:any, regex:RegExp|string) {
      expect(value).toMatch(regex);
    }

}

export const assertions = new Assertions();