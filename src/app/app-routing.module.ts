import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerListComponent } from './beer-list/beer-list.component';

const routes: Routes = [
  { path: '',   redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'homepage', component: BeerDetailsComponent },
  { path: 'list', component: BeerListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
