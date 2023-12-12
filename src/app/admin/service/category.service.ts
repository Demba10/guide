// category.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: { category: string; description: string }[] = [];

  constructor() {
    // Récupère les données depuis le localStorage lors de l'initialisation du service
    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      this.categories = JSON.parse(storedCategories);
    }
  }

  getCategories(): { category: string; description: string }[] {
    return this.categories;
  }

  addCategory(category: string, description: string): void {
    this.categories.push({ category, description });
    this.updateLocalStorage();
  }

  removeCategory(index: number): void {
    this.categories.splice(index, 1);
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    // Enregistre les données dans le localStorage à chaque modification
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }
}
