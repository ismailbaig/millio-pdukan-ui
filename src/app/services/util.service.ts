import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    private _checkoutCartItemsCount: number = 0
    private _baseUrl: string = "https://localhost:44378";

    constructor() { }

    public AddToTotalCheckoutItemsCount(): void {
        this._checkoutCartItemsCount++;
    }

    public DecrementFromTotalCheckoutItemsCount(): void {
        this._checkoutCartItemsCount--;
    }

    public GetTotalCheckoutItemsCount(): number {
        if (this._checkoutCartItemsCount)
            return this._checkoutCartItemsCount;
        return 0;
    }

    public GetBaseUrl(): string {
        return this._baseUrl;
    }
}