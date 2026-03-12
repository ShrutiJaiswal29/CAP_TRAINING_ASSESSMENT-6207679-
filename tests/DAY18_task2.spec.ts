import {test,expect} from "@playwright/test";

test("Browser Notification",async({browser})=>{

  let context = await browser.newContext({
    permissions:["notifications"]
  });

  let page = await context.newPage();

  await page.goto("https://www.justdial.com");

  await page.screenshot({path:"screenshots/homepage.png"});

  let result = await page.evaluate(async()=>{
    return await Notification.requestPermission();
  });

  console.log(result);

  await page.locator('#main-auto').fill("Restaurants");

  await page.screenshot({path:"screenshots/search-text-entered.png"});

  await page.keyboard.press("Enter");

  await page.screenshot({path:"screenshots/search-results.png"});

  await expect(page.locator('#main-auto')).toHaveValue("Restaurants");

});