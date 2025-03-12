import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailSongComponent, SongsListComponent } from '@components/songs';

const routes: Routes = [
  {
    path: 'songs',
    component: SongsListComponent,
  },
  {
    path: 'songs/:songId',
    component: DetailSongComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
