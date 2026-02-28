import { test } from '@playwright/test'

test("task2", async ({ page, browserName }) => {

    await page.goto("https://www.flipkart.com/");

    await page.waitForLoadState('domcontentloaded');

    await page.waitForTimeout(4000);

    const popup = page.locator('//button[text()="✕"]');

    if (await popup.count() > 0)
        await popup.click();

    await page.locator('//input[contains(@class,"Pke_EE")]').fill("phones");

    await page.keyboard.press("Enter");

    await page.waitForTimeout(4000);

    await page.locator('//div[text()="Apple"]').click();

    await page.waitForTimeout(4000);

    let price = await page.locator('(//div[contains(@class,"_30jeq3")])[3]').textContent();

    console.log(price);

    await page.screenshot({ path: `screenshot/task2${browserName}.png` });

});