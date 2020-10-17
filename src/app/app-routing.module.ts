import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';

const routes: Routes = [
  {path: '', redirectTo: 'angular-basics', pathMatch: 'full'},
  {path: 'angular-basics', component: AngularBasicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
