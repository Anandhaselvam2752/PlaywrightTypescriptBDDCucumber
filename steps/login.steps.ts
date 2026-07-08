// features/steps/login.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from '@playwright/test';

// playwright-bdd wires page context for you — see their docs for exact setup,
// this shows the conceptual shape:

Given('I am on the login page', async function () {
  await this.page.goto('https://www.saucedemo.com');
});

When('I log in with username {string} and password {string}', async function (username: string, password: string) {
  await this.page.getByPlaceholder('Username').fill(username);
  await this.page.getByPlaceholder('Password').fill(password);
  await this.page.getByRole('button', { name: 'Login' }).click();
});

Then('I should see the products page', async function () {
  await expect(this.page.getByText('Products')).toBeVisible();
});