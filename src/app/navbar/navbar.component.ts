import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cartCount: number = 0;
  showMenu: boolean = false;
  @Input() totalCartItemsCount: number = 0;

  constructor( 
    private router: Router, 
    ) { 
      this.cartCount = 10;
    }

  ngOnInit(): void {
    const navbarItems = document.querySelectorAll('.navbar-nav>li');
    navbarItems.forEach(navbarItem => {
      navbarItem.addEventListener('click', () => {

        console.log('click event')
        const navbar = document.querySelector('.navbar-collapse');
        navbar?.classList.remove('show');
      })
    });
  }

  ngOnChanges() {
    
  }

  loginpDukaan(){
    this.router.navigateByUrl("/login");
  }

  navToCheckIn() {
    this.showMenu = false;
    console.log(this.showMenu);
  }

  navigateDashboard(){
    this.router.navigateByUrl("/home/dashboard");
  }

}
