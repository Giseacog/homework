import { Component, Input } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() bookList:Book[]=[];

  favorites:number[]=[];

  constructor(private libraryService:LibraryService){}

  ngOnInit(){
      this.loadFavorites();
  }

  loadFavorites(){
      this.favorites=this.libraryService.getFavorites();
  }

  addToFavorites(id:number){
    this.libraryService.addToFavorites(id);
    this.loadFavorites();


  }

  removeFromFavorites(id:number){
    this.libraryService.removeFromFavorites(id);
    this.loadFavorites();
  }

  //revisa que el libro este en los favoritos
  checkFavorite(id_book:number){
     return this.favorites.includes(id_book);

  }


   


 
}




