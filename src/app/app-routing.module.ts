import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DrinksResolver } from './drinks.resolver';
import { DrinksComponent } from './drinks/drinks.component';
import { HomeComponent } from './home/home.component';
import { StayPutGuard } from './stay-put.guard';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
}, {
  path: 'drinks',
  component: DrinksComponent,
  canActivate: [AuthGuard],
  canDeactivate: [StayPutGuard],
  resolve: { drinks: DrinksResolver }
}, {
  path: '**',
  redirectTo: 'home',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
