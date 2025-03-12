import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SongsService } from '@services/songs.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit, OnDestroy {
  //* Injects - Privates *//
  readonly #songsService = inject(SongsService);

  private unsubscribe$ = new Subject<void>();

  //* Signals *//

  //* Life Cycle Hooks *//
  ngOnInit() {
    this.subscribeData();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  //* Private Methods *//
  private subscribeData() {
    this.#songsService
      .getSongs()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((songs) => {
        console.log(songs);
      });
  }
}
