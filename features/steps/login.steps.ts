// features/steps/login.steps.ts
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
});

When('I log in with username {string} and password {string}', async ({ page }, username: string, password: string) => {
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
});

Then('I should see the products page', async ({ page }) => {
  await expect(page.getByText('Products')).toBeVisible();
});