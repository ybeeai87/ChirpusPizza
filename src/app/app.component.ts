import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';
  menuItems: MenuItem[] = [
    {item: "Breadsticks", category:"Sides", price:4.99},
    {item: "Wings", category:"Sides", price: 8.99},
    {item: "Chicken Fingers", category:"Dinner", price: 11.99},
    {item: "Pizza", category: "Dinner", price: 11.99},
    {item: "Caesar Salad", category:"Salads", price: 5.99},
    {item:"Cinnamon Roll", category:"Dessert", price: 8.99}
  ];
}
