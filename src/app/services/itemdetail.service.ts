import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeDetails } from "../models/employee.model";
import { ItemDetailsModel } from "../models/itemdetails.model";

@Injectable({
    providedIn: 'root'
  })
export class ItemDetailsService {

    private selectedItemDetails: ItemDetailsModel | undefined;

    constructor(){}

    public AddSelectedItemDetails(itemdtls: ItemDetailsModel): void {
      this.selectedItemDetails = itemdtls;
    }

    public GetSelectedItemDetails(): ItemDetailsModel {
      if(this.selectedItemDetails)
        return this.selectedItemDetails;
      return new ItemDetailsModel("", "", "", 0, 0, 0,"", "", "", "", "", "", "");
    }
}