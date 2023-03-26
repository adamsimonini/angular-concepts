import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // when targeting the browser platform, we need to use this import

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule) // this is the starting point of the angular code
  .catch((err) => console.error(err));
