import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoicePositionFormComponent } from './invoice-position-form/invoice-position-form.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    InvoicePositionFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
