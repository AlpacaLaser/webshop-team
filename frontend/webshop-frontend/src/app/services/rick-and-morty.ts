import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
}

export interface RickAndMortyResponse {
  info: { count: number; pages: number; next: string | null; prev: string | null };
  results: Character[];
}

@Injectable({ providedIn: 'root' })
export class RickAndMortyService {
  private apiUrl = '/rickandmorty/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<RickAndMortyResponse> {
    return this.http.get<RickAndMortyResponse>(`${this.apiUrl}?page=${page}`);
  }
}
