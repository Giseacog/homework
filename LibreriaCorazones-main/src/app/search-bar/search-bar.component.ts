import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
      @Output() listOutPut: EventEmitter< Book[]> = new EventEmitter< Book[]>;

      findBookList:Book[]=[];

      constructor(private libraryService:LibraryService){}

      onSearch(toSearch:string){
            if ( toSearch == ''){
               this.findBookList=this.libraryService.getBooks();
               this.listOutPut.emit(this.findBookList);
            }
            else{
               this.findBookList= this.libraryService.searchBooks(toSearch);
               this.listOutPut.emit(this.findBookList);
            }

      }
}
