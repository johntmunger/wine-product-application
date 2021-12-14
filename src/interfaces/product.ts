export interface IProduct {
    id: number,
    type: string,
    title: string,
    imageUrl: string,
    size: string,
    wineryDirect: number,
    reviews: number,
    likes: number,
    price: string,
    InStock: number,
    delivery: string,
    caseGift: string,
    btnSingle: string,
    caseAvailability: number,
    btnCase: string,
    details: {
        description: string,
        brand: string,
        state: string,
        region: string,
        wineType: string,
        varietal: string,
        body: string,
        style: string,
        abv: string,
        taste: string,
        sku: number
    }
}

export interface IProductService {
    getProduct(id: number): Promise<IProduct>;
    getProductDetail(id: number): Promise<IProduct>;
    getProducts(): Promise<IProduct[]>;
  }
