import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  fileName: string = ''; // Para mostrar el nombre del archivo
  imageSrc: string | null = null; // URL de la imagen para la previsualización 

  newItem: MenuItem = {
    name: '',
    description: '',
    price: null,
    quantity: 0,
    image: '',
    type: '',
  };
   
   tipo:string='Desayuno';

   notificaCambio(mitipo:string){
        this.tipo=mitipo;
        console.log("seleccionaste:"+mitipo);
   }

   cancel(){
      this.newItem={
         name:'',
         description:'',
         price:0,
         quantity:0,
         image:'',
         type:''
      }
      this.fileName='';
      this.imageSrc='';
   }

  addItem(){
       if(this.newItem.name != '' && this.newItem.description!='' &&
          this.newItem.price>0){
             this.newItem.type=this.tipo;
             this.menuList.push(this.newItem);
             this.cancel();
        }else{
           alert("llena todos los campos pf");
        }
  }

     checkStatus(task:MenuItem){
            if( task.quantity>0){ 
              return 'able';
            }else{
              return 'not-able';
            }
     }


   menuList: MenuItem[] = [
    {
      name: 'Huevos Estrellados',
      description: 'Elegir cantidad.',
      price: 120,
      quantity: 2,
      image: '/img/8.png',
      type: 'Desayuno',
    },
    {
      name: 'Filete con champiñones',
      description: 'Elegir termino de carne y complemento.',
      price: 120,
      quantity: 0,
      image: '/img/11.png',
      type: 'Comida',
    },
    {
      name: 'Sincronizada',
      description: 'Elegir complemento',
      price: 120,
      quantity: 2,
      image: '/img/14.png',
      type: 'Cena',
    },
  ];


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;

      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.newItem.image = this.imageSrc;
      };
      reader.readAsDataURL(file);
    } else {
      this.fileName = '';
      this.imageSrc = null;
      this.newItem.image = '';
    }
  } 

  
}//fin de la clase
