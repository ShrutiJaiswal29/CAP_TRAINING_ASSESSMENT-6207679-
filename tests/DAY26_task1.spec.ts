import {test, expect} from "@playwright/test"
import {LoginPage} from "../pages/login.page.ts"
import { ManagerPage } from "../pages/manager.page.ts"
import { CustomerPage } from "../pages/customer.page.ts"

test('E2E Banking Flow',async({page})=>{
    const loginPage= new LoginPage(page);
    const managerPage= new ManagerPage(page);
    const customerPage= new CustomerPage(page);

    await loginPage.goto();
    await loginPage.clickBankManagerLogin();
    await managerPage.addCustomer('Shruti','Jaiswal','302033');
    await managerPage.openAccount('Shruti Jaiswal');
    await managerPage.goHome();
    await page.waitForLoadState('domcontentloaded');
    await loginPage.clickCustomerLogin();
    await expect(page.getByText('Your Name :')).toBeVisible();
    await customerPage.selectCustomer('Shruti Jaiswal');
    await customerPage.deposit('3000');
    await customerPage.withdraw('2000');
    
    await customerPage.validateBalance('1000')
    await page.screenshot({ path: 'screenshot.png' });
    await customerPage.logout();
});