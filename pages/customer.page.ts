import { Page, expect } from '@playwright/test';

export class CustomerPage {
  constructor(private page: Page) {}

  async selectCustomer(name: string) {
    await this.page.locator('#userSelect').waitFor();
    await this.page.locator('#userSelect').selectOption({ label: name });
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async deposit(amount: string) {
    await this.page.getByRole('button', { name: 'Deposit' }).first().click();
    await this.page.getByPlaceholder('amount').fill(amount);
    await this.page.getByRole('button', { name: 'Deposit' }).nth(1).click();
    await this.page.waitForTimeout(500);
  }

 async withdraw(amount: string) {
  await this.page.getByRole('button', { name: 'Withdrawl' }).click();
  await this.page.getByPlaceholder('amount').fill(amount);
  await this.page.getByRole('button', { name: 'Withdraw' }).nth(1).click();
}
  async validateBalance(expected: string) {
  await expect(this.page.locator('strong').nth(3)).toHaveText(expected, { timeout: 10000 });
}

  async logout() {
    await this.page.getByRole('button', { name: 'Logout' }).click();
  }
}