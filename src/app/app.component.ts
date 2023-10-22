import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practica_Inc-Dec';
    num: number = 0;
  
    incremento() {
      this.num++;
    }
    decremento() {
      this.num--;
    }
}
