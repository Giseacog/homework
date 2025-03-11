import { CurrencyPipe } from '@angular/common';
import { Component, Input, Output, EventEmitter, ɵIMAGE_CONFIG_DEFAULTS } from '@angular/core';

@Component({
  selector: 'app-producti-item',
  imports: [CurrencyPipe],
  templateUrl: './producti-item.component.html',
  styleUrl: './producti-item.component.css'
})
export class ProductiItemComponent {

  @Input () productName: string="";
  @Input () productPrice: string="";
  @Input () productImage: string="";

  @Output () productAdded: EventEmitter<string>=new EventEmitter<string>();

  addToCart():void{
    this.productAdded.emit(this.productName);


  }
  
}
