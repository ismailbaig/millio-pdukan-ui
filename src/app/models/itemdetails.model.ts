export class ItemDetailsModel {
    public UniqueId: string = "";
    public ImageName: string = "";
    public ItemName: string = "";
    public ActualPrice: number = 0;
    public DiscountPrice: number = 0;
    public ItemCartCount: number = 0;
    public ItemDetail1:string = "";
    public ItemDetail2:string = "";
    public ItemDetail3:string = "";
    public ItemDetail4:string = "";
    public ItemDetail5:string = "";
    public ItemDetail6:string = "";
    public Description:string = "";

    public constructor(
        public _UniqueId: string, 
        public _ImageName: string, 
        public _ItemName: string, 
        public _ActualPrice:number,
        public _DiscountPrice:number,
        public _ItemCartCount: number,
        public _ItemDetail1:string,
        public _ItemDetail2:string,
        public _ItemDetail3:string,
        public _ItemDetail4:string,
        public _ItemDetail5:string,
        public _ItemDetail6:string,
        public _Description:string,
        ) 
    {
        this.UniqueId = _UniqueId;
        this.ImageName = _ImageName;
        this.ItemName = _ItemName;
        this.ActualPrice = _ActualPrice;
        this.DiscountPrice = _DiscountPrice;
        this.ItemCartCount = _ItemCartCount;
        this.ItemDetail1 = _ItemDetail1;
        this.ItemDetail2 = _ItemDetail2;
        this.ItemDetail3 = _ItemDetail3;
        this.ItemDetail4 = _ItemDetail4;
        this.ItemDetail5 = _ItemDetail5;
        this.ItemDetail6 = _ItemDetail6;
        this.Description = _Description;
    }
}