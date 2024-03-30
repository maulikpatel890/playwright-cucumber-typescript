export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: string,
            ENV: string,
            BASEURL: string,
            HEADLESS: string,
        }
    }
}