import { Component } from '@angular/core';
import { Book } from '../book';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-libreria',
  imports: [ReactiveFormsModule],
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
})
export class LibreriaComponent {
  bookForm: FormGroup;
  books: Book[] = [];
  selectedImage: string | null = null;
private ____________________: any;

  constructor (private fb: FormBuilder) {
    this.bookForm = this. fb.group({
      title: ['', [Validators.required]],
      id_book: ['',[Validators.required]],
      author: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    const storedBooks = localStorage.getItem('books');
    this.books = storedBooks ? JSON.parse(storedBooks): [];

  }
  
  addBook(): void{
  
  if (this.bookForm.valid && this.selectedImage) {
    const newBook: Book = {
      ...this.bookForm.value,
      image:this.selectedImage
    };

    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.bookForm.reset();
  } else {
      this.bookForm.markAllAsTouched();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0 ){
      const file = input.files[0];

      this.bookForm.get('image')?.markAsTouched();

      const reader = new FileReader();

      reader.onload = () => {
        this.selectedImage = reader.result as string; //Base64 para mostrar en pantalla
      };
      reader.readAsDataURL(file);
    }else{
      this.selectedImage= '';
      this.bookForm.get('image')?.setValue(null);

    }


    }

  }
  


