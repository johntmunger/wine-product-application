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
    details: [],
}

export interface IProductService {
    getProduct(id: number): Promise<IProduct>;
    getProducts(): Promise<IProduct[]>;
}
