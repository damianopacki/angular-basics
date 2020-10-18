import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { OneWayDataBindingComponent } from './angular-basics/one-way-data-binding/one-way-data-binding.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TwoWayDataBindingComponent } from './angular-basics/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './angular-basics/directives/directives.component';
import { ImportantMessageDirective } from './angular-basics/directives/important-message.directive';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo-list/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AngularBasicsComponent,
    OneWayDataBindingComponent,
    NotFoundComponent,
    TwoWayDataBindingComponent,
    DirectivesComponent,
    ImportantMessageDirective,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
