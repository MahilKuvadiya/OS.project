import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrsimulComponent } from './pages/rrsimul/rrsimul.component';
import { HomeComponent } from './pages/home/home.component';
import { TryComponent } from './pages/try/try.component';

const routes: Routes = [
  {
    path: 'rrsimul',
    component: RrsimulComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'try',
    component:  TryComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
