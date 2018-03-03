import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QrComponent } from './qr/qr.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    QrComponent,
    ErrorpageComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
