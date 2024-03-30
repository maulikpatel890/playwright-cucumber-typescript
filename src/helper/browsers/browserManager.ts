import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

export const invokeBrowser = () => {
    const headless: boolean = process.env.HEADLESS === 'true';

    const options: LaunchOptions = {
        headless: headless, 
        slowMo: 500,
        args: ["--start-maximized"],
    }
    const browserType = process.env.BROWSER || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!")
    }

}