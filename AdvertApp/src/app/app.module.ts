import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AdsDeckComponent } from './pages/ads-deck/ads-deck.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserService } from './shared/services/user.service';
import { EditComponent } from './pages/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AdsDeckComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
