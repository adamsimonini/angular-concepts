import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoediaItemComponent } from './media-item.component';

@NgModule({
  // this object is known as "meta-data" https://angular.io/guide/ngmodules
  imports: [BrowserModule], // for other modules (i.e., external modules)
  declarations: [AppComponent, MoediaItemComponent], // makes components, directives, and pipes avaiable to the module that don't come in from another module
  bootstrap: [AppComponent], // used for root module - the entry point for the app code
})
export class AppModule {}
