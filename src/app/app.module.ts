import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { OneWayDataBindingComponent } from './angular-basics/one-way-data-binding/one-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AngularBasicsComponent,
    OneWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
