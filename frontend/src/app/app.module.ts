import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { FooterComponent } from './comps/footer/footer.component';
import { HeaderComponent } from './comps/header/header.component';
import { MainComponent } from './comps/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
