import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsDeckComponent } from './pages/ads-deck/ads-deck.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  { path: '', component: AdsDeckComponent },
  { path: 'edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
