import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { OneWayDataBindingComponent } from './angular-basics/one-way-data-binding/one-way-data-binding.component';
import { TwoWayDataBindingComponent } from './angular-basics/two-way-data-binding/two-way-data-binding.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'angular-basics', pathMatch: 'full'},
  {path: 'angular-basics', component: AngularBasicsComponent, children: [
    {path: '', redirectTo: 'one-way-data-binding', pathMatch: 'full'},
    {path: 'one-way-data-binding', component: OneWayDataBindingComponent},
    {path: 'two-way-data-binding', component: TwoWayDataBindingComponent},
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
