import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyService, Character } from '../../services/rick-and-morty';

@Component({
  selector: 'app-rick-and-morty',
  imports: [CommonModule],
  templateUrl: './rick-and-morty.html',
  styleUrl: './rick-and-morty.scss'
})
export class RickAndMorty implements OnInit {
  characters: Character[] = [];
  isLoading = true;
  errorMessage = '';
  currentPage = 1;
  totalPages = 1;

  constructor(private service: RickAndMortyService) {}

  ngOnInit(): void { this.loadCharacters(); }

  loadCharacters(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.service.getCharacters(this.currentPage).subscribe({
      next: (data) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Hiba történt a karakterek betöltésekor!';
        this.isLoading = false;
      }
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  getStatusClass(status: string): string {
    if (status === 'Alive') return 'bg-success';
    if (status === 'Dead') return 'bg-danger';
    return 'bg-secondary';
  }
}
