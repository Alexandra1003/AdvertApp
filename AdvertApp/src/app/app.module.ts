import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AdsDeckComponent } from './pages/ads-deck/ads-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AdsDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
