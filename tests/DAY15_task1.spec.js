import {test,expect} from "@playwright/test"

test("",async({page})=>{
    test.setTimeout(20000);
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.getByLabel("name").type("Shruti")
    await page.getByLabel("email").type("shruti@123")
    await page.getByLabel("password").type("abc123")
    await page.getByRole('button', { name: 'Register' }).click();
   await expect(page).toHaveURL('https://demoapps.qspiders.com/ui?scenario=1');
   await expect(page.getByLabel("Name")).toHaveId("name");
    await page.screenshot({path:"screeshot/Day15-task1.png"});
   await expect(page).toHaveScreenshot();
})