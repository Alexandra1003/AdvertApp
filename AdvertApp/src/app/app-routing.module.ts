import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsDeckComponent } from './pages/ads-deck/ads-deck.component';

const routes: Routes = [
  { path: '', component: AdsDeckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
