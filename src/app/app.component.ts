import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'invoice';

  name:string = 'Daniel';

  counter:number = 0;

  getResult():number{
    return 2+2;
  }

  constructor(){
    setInterval(()=>{
      this.counter++;
    },500)
  }
}
