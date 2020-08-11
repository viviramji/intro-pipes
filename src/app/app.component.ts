import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pipes';

  name: string = 'Viviramji';
  arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  percent: number = 0.685;

  persona = {
    name: 'viviramji',
    address: 'Street 55',
    phone: '000 000 0000',
  };

  promiseValue = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done!');
    }, 4000);
  });
}
