import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailSongComponent } from './components/songs/detail-song/detail-song.component';
import { SongsListComponent } from './components/songs/songs-list/songs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    DetailSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
