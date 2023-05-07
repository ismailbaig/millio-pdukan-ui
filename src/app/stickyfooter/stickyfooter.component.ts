import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-stickyfooter',
  templateUrl: './stickyfooter.component.html',
  styleUrls: ['./stickyfooter.component.scss']
})
export class StickyfooterComponent implements OnInit {

  cartCount: number = 0;
  
  ngOnInit(): void {
    this.cartCount = 100;
  }
}
