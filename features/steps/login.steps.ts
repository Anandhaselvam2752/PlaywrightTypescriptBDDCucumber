// features/steps/login.steps.ts
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('I log in with username {string} and password {string}', async ({ page }, username: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

Then('I should see the products page', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.productsTitle).toBeVisible();
});