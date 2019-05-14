import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsDeckComponent } from './pages/ads-deck/ads-deck.component';
import { EditComponent } from './pages/edit/edit.component';
import { AdDetailsComponent } from './pages/ad-details/ad-details.component';
import { OnlyLoggedInUserGuard } from './shared/guards/onlyLoggedInUser.guard';

const routes: Routes = [
  { path: '', component: AdsDeckComponent },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [OnlyLoggedInUserGuard]
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [OnlyLoggedInUserGuard]
  },
  { path: ':id', component: AdDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
