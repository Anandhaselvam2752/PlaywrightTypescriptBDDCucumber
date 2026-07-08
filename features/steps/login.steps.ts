// features/steps/login.steps.ts
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../fixtures/page-fixtures';

const { Given, When, Then } = createBdd(test);

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.goto();
});

When('I log in with username {string} and password {string}', async ({ loginPage }, username: string, password: string) => {
  await loginPage.login(username, password);
});

Then('I should see the products page', async ({ inventoryPage }) => {
  await expect(inventoryPage.productsTitle).toBeVisible();
});