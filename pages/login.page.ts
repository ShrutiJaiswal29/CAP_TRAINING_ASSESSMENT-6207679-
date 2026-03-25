import {Page} from "@playwright/test"
export class LoginPage{
    constructor(private page:Page){}

    async goto(){
        await this.page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")    
    }

    async clickBankManagerLogin(){
         await this.page.getByRole('button',{name:'Bank Manager Login'}).click();
    }

   async clickCustomerLogin() {
  await this.page.locator('button:has-text("Customer Login")').waitFor({ state: 'visible' });
  await this.page.locator('button:has-text("Customer Login")').click();
}

}