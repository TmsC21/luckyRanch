import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AppComponent} from './app.component';
import {RouterModule, RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {LayoutComponent} from './pages/layout/layout.component';
import {AboutComponent} from './pages/about/about.component';
import {BrowserModule} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
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
        MatIconButton,
        MatIcon,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger,
        NgOptimizedImage,
        MatFabButton,
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
