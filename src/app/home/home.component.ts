import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _totalCartItemsCount: number = 0;

  shwNav: boolean = true;
  shwFooter: boolean = true;


  constructor(private router: Router) { 
    console.log("home controller constructor!!");
  }

  ngOnInit(): void {

    // if(this.router.url ) {
    //   this.shwNav = false;
    //   this.shwFooter = false;
    // } else {
    //   this.shwNav = true;
    //   this.shwFooter = true;
    // }
    
  }

  changeTotalItemsCount(totalCartItemsCount: any) {
    this._totalCartItemsCount = parseInt(totalCartItemsCount);
  }
  
}
