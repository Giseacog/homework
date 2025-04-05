import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ListComponent } from '../list/list.component';
import { Book } from '../book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-vistaprincipal',
  imports: [SearchBarComponent, ListComponent],
  templateUrl: './vistaprincipal.component.html',
  styleUrl: './vistaprincipal.component.css'
})
export class VistaprincipalComponent {
  title = 'libreria';
    myBookList:Book[] = [];
  
    //se inyecta el servicio al componente
    constructor(private libraryService:LibraryService) {  }
    
    ngOnInit() {
      this.loadInitialBooks(); // Carga los libros al inicio
    }
     // Muestra todos los libros inicialmente
    loadInitialBooks() {
      this.myBookList = this.libraryService.getBooks();
    }
  
    searchEvent(eventList:Book[]){
      this.myBookList = eventList;
      console.log(this.myBookList);
    }
  
  
  }
  


