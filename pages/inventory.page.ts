// pages/inventory.page.ts
import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productsTitle: Locator;
  readonly productItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.getByText('Products');
    this.productItems = page.locator('.inventory_item');
  }
}