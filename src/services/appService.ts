import Axios, { AxiosInstance } from "axios";
import { apiConstants, ApiConstantsInterface } from "@/constants/api.constants";
import { IProduct, IProductService } from "@/interfaces/product";

class AppStoreService implements IProductService {
    protected axios: AxiosInstance;
    protected config: ApiConstantsInterface;

    constructor(config: ApiConstantsInterface) {
        this.config = config;
        this.axios = Axios.create({
            baseURL: config.baseUrl,
            headers: config.headers
        });
    }

    async getProduct(id: IProduct['id']): Promise<IProduct> {
        const response = await this.axios.get(`${this.config.productEndpoint}/${id}`);
        // console.log(response.data);
        return response.data;
    }

    async getProducts(): Promise<IProduct[]> {
        const response = await this.axios.get(this.config.productEndpoint);
        // console.log(response.data);
        return response.data;
    }
}

const appStoreService = new AppStoreService(apiConstants);
export { appStoreService };
