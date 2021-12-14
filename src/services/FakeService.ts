import Axios, { AxiosInstance } from "axios";
import { apiConstants, ApiConstantsInterface } from "@/constants/api.constants";
import { Product } from "@/interfaces/product";

interface IFakeStoreService {
    getProduct(id: number): Promise<Product>;
    getProducts(): Promise<Product[]>;
}

class FakeStoreService implements IFakeStoreService {
    protected axios: AxiosInstance;
    protected config: ApiConstantsInterface;

    constructor(config: ApiConstantsInterface) {
        this.config = config;
        this.axios = Axios.create({
            baseURL: config.baseUrl,
            headers: config.headers
        });
    }

    async getProduct(id: Product['id']): Promise<Product> {
        const response = await this.axios.get(`${this.config.productEndpoint}/${id}`);
        // console.log(response.data);
        return response.data;
    }

    async getProducts(): Promise<Product[]> {
        const response = await this.axios.get(this.config.productEndpoint);
        // console.log(response.data);
        return response.data;
    }
}

const fakeStoreService = new FakeStoreService(apiConstants);
export { fakeStoreService };
