import puppeteer from 'puppeteer';

const pti = require('puppeteer-to-istanbul');
const { setup, teardown } = require('jest-dev-server');

beforeAll(async () => {
    await setup({
        allowExistingServer: true,
        command: 'http-server . -p 5999',
        launchTimeout: 5000,
        port: 5999,
        usedPortAction: 'ignore',
    });
});

afterAll(async () => {
    await teardown();
});

test('test open page with script', async done => {
    const browser = await puppeteer.launch({
        headless: false,
        ignoreHTTPSErrors: true,
        args: [`--window-size=1400,900`, '--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = (await browser.pages())[0];

    await page.coverage.startJSCoverage();

    await Promise.all([
        page.goto(`http://localhost:5999/`),
        page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    ]);

    const jsCoverage = await page.coverage.stopJSCoverage();

    pti.write([...jsCoverage]);

    await browser.close();

    done();
});
