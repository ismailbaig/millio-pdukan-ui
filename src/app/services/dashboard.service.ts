import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { EmployeeDetails } from "../models/employee.model";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class DashboardService {

    private itemBaseDetails: any;
    private _baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient ){}

    //The below method is actually using Node end point and not .net end point.
    // public GetAllItemsBaseDetails_NODEEndPoint(): Observable<any> {
    //   var data = this.http.get('http://localhost:9400/gtalitms');
    //   return data;
    // }

    public GetAllItemsBaseDetails(): Observable<any> {
      var data = this.http.get(this._baseUrl + 'api/dashboard/gt');
      //return of(mock_item_basic_details);
      //return of({confrimation: true, patientName: ptndetails.name});
      return data;
    }

    public GetAllItemsBaseDetails2(): Observable<any> {
      var data = this.http.get(this._baseUrl + 'api/dashboard/gt').subscribe(
        //success
       (response) => {
          console.log(response);
          return response;
        },

        //error
        (err) => {
          console.log(err);
          return err;
        }
      );
      //return of(mock_item_basic_details);
      //return of({confrimation: true, patientName: ptndetails.name});
      return of("loading");
    }

    public AddDetails(empdetls: EmployeeDetails) {
      this.http.get(this._baseUrl + '/api/Blob').subscribe(
        //success
        (response) => {
          console.log(response);
        },

        //error
        (err) => {
          console.log(err);
        }        
      );
      return new EmployeeDetails();
    }

}