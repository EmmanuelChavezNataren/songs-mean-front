import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  //* Injects - Privates *//
  readonly #httpClient = inject(HttpClient);
  readonly #baseUrl = 'http://localhost:3000/songs';

  getSongs() {
    return this.#httpClient.get(this.#baseUrl);
  }

  getSongById(songId: string) {
    return this.#httpClient.get(`${this.#baseUrl}/${songId}`);
  }
}
