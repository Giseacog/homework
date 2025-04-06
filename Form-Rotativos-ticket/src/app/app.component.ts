import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuyTicketsComponent } from "./pages/buy-tickets/buy-tickets.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BuyTicketsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Form-Rotativos-ticket';
}
