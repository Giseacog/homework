import { Injectable } from '@angular/core';
import { Book } from './book';
import booksData from './books.json';   

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books : Book[] = booksData; 
  private searchResults = this.books; // Estado inicial con todos los libros

  constructor() { }

// obtiene la lista de los libros
  getBooks(){
    return this.books;
  }

  searchBooks(term:string):Book[]{
      const filteredBooks=this.books.filter(
         (book)=>
            book.title.toLowerCase().includes(term.toLowerCase()) ||
         book.author.toLowerCase().includes(term.toLowerCase())
      );
      this.searchResults=filteredBooks;
      return this.searchResults;
  }

  
  getFavorites():number[]{
    const favorites = localStorage.getItem('favorites') ? localStorage.getItem('favorites') : '';
    return favorites ? JSON.parse(favorites) : [];

  }

  addToFavorites(id:number){
      const favorites= this.getFavorites();
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));

  }

  removeFromFavorites(id:number){
    const favorites= this.getFavorites();
    const updateBooks= favorites.filter(id_book =>  id_book!==id);
    localStorage.setItem('favorites', JSON.stringify(updateBooks));
  }
  
   
}
