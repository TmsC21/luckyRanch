import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {LayoutComponent} from './pages/layout/layout.component';
import {AboutComponent} from './pages/about/about.component';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
