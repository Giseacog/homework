import { Component } from '@angular/core';
import { ProductiItemComponent } from '../producti-item/producti-item.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  imports: [ProductiItemComponent, CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  cartItems: string[] = [];
  total: number = 0;

  products: any[] = [
    //Datos de los productos
    { name: 'Tenis negros', price: 1500, image: '/tenis.jpg' },
    { name: 'Tenis negros', price: 1500, image: '/tenis.jpg' },
    { name: 'Tenis negros', price: 1500, image: '/tenis.jpg' },
    { name: 'Tenis negros', price: 1500, image: '/tenis.jpg' },
    { name: 'Tenis negros', price: 1500, image: '/tenis.jpg' },
    { name: 'Tenis negros', price: 1500, image: '/tenis.jpg' },
  ];

  onProductAdded(product: string): void {
    //Busca dependiendo de los prodcutos, ejemplo tenis rosa es igul a tenis negro, NO, hasta que da el resultado
    this.cartItems.push(product);
    let indice = this.products.findIndex((p) => p.name === product);
    this.total += this.products[indice].price;
  }
}
