      import { Component,EventEmitter,OnInit, Output } from '@angular/core';
      import { Router } from '@angular/router';
      import { Observable, of, Subscription } from 'rxjs';
      import { ItemDetailsModel } from './models/itemdetails.model';
      import { myItemDetailsModel } from './models/itemsbasedetails.model';
import { DashboardService } from './services/dashboard.service';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
      })
      export class AppComponent implements OnInit {
        title = 'pDukaanUI';
        loginuser: any;
        //_itemsBaseDetails: ItemDetailsModel[] | undefined;
        totalInitialProducts: number = 0;
        //isLoading: boolean = true;
        isLoading$: Observable<boolean> | undefined;
        products$_old: Observable<myItemDetailsModel[]> | undefined;
        products: myItemDetailsModel[] | undefined;
        @Output() sendtotalcartitemcount: EventEmitter<number> = new EventEmitter<number>();
        _totalSaved: number = 0;
        //subscription: Subscription;
        _coreTest: number = 0;
        
        constructor( 
          private router: Router,
          private dashboard_srv: DashboardService // dependency inject
          ) {

          // this.subscription = this.messageservice.getAllCheckInItems().subscribe(singleCheckInItem => {
          //   if (singleCheckInItem){
          //     this._itemsBaseDetails?.forEach(function (item: ItemDetailsModel) {
          //       if(item.UniqueId === singleCheckInItem.UniqueId)
          //         item.ItemCartCount = singleCheckInItem.Count;
          //     });
          //   }
          // });
          console.log("app constructor");
          
        }
        
        ngOnInit(): void {
          //this.storelocal();
          //this.loginuser = JSON.parse(localStorage.getItem('name') || '{}');
          //console.log(this.loginuser);
          this.getItembaseDetails();
        
          console.log("app ng on init");
      }

      storelocal() {
          //localStorage.setItem('name','{"fn":"karim", "ln":"Abdul"}');
      }

      addDetails(){

      }

      addToCart(item: ItemDetailsModel){
        
      }

        getItembaseDetails() {
          this.isLoading$ = of(true);
          this.totalInitialProducts = -1; 
          if(this.totalInitialProducts <= 0) {

            this.dashboard_srv.GetAllItemsBaseDetails().subscribe(
              (data) => {
                this.products = data.itemsBasicDetails;
                this.isLoading$ = of(false);
              },
              (err) => {
                this.products = [];
              }
            );
          }
          

        }

        incrementItemCount(item: myItemDetailsModel) {

        }

        decrementItemCount(item: myItemDetailsModel) {

        }

        navigateToCheckout(){
          //this.router.navigateByUrl("/checkin");
          this.router.navigateByUrl("/grid");
        }

        public getTotalItemsToCheckInCart(): number {
          let totalItems = 0;
          // this._itemsBaseDetails?.forEach(function (item: any) {
          //   totalItems = totalItems + item.ItemCartCount;
          // });
          return totalItems;
        }
        
      }
