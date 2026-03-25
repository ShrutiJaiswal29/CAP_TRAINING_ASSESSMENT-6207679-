import {Page,expect} from '@playwright/test'

export class ManagerPage{
    constructor(private page:Page){}

async addCustomer(firstName: string, lastName: string, postCode: string) {
    await this.page.getByRole('button', {name:'Add Customer'}).click();

    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Post Code').fill(postCode);

    this.page.once('dialog',async dialog=>{
        await dialog.accept();
    })

    await this.page.getByRole('button',{name:'Add Customer'}).nth(1).click();
}
async openAccount(customerName: string) {
  await this.page.getByRole('button', { name: 'Open Account' }).click();

  await this.page.waitForSelector('#userSelect', { state: 'visible' });

  await this.page.locator('#userSelect').selectOption({ label: customerName });

  await this.page.locator('#currency').selectOption('Rupee');

  this.page.once('dialog', async dialog => {
    await dialog.accept();
  });

  await this.page.getByRole('button', { name: 'Process' }).click();
}

async goHome(){
    await this.page.getByRole('button',{name:'Home'}).click();
      await this.page.waitForTimeout(1000);
        await this.page.waitForURL('**/login'); 
}
}

