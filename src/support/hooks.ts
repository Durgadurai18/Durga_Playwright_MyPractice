import { Before, After, setWorldConstructor } from '@cucumber/cucumber';
import { CustomWorld } from './world.ts';
setWorldConstructor(CustomWorld);
Before(async function(this: CustomWorld){ await this.init(); });
After(async function(this: CustomWorld){ await this.close(); });