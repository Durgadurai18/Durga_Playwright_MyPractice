import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world.ts';
Given('I open google page', async function(this: CustomWorld){
  await this.page.goto('https://www.google.com');
});