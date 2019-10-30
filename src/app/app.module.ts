import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule    
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
      const appComponent = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('app-main-dashboard', appComponent);
  }
}
