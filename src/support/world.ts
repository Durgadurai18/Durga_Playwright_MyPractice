import { World, type IWorldOptions } from '@cucumber/cucumber';
import { chromium, type Browser, type Page } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  constructor(options: IWorldOptions) { super(options); }
  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }
  async close() { await this.browser.close(); }
}