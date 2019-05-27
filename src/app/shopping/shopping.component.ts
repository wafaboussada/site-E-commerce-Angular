import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public counter : number = 1;
  public price : number = 150;
    
    increment(){
      this.counter += 1;
      this.price += 150;
    }
    
    decrement(){
      if (this.counter >0) {
        this.counter -= 1;
        this.price -= 150;
      }
    }

}
