import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './pages/global/global.component';
import { NavComponent } from './pages/global/nav/nav.component';
import { TopComponent } from './pages/global/top/top.component';
import { GalleryComponent } from './pages/global/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    NavComponent,
    TopComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
