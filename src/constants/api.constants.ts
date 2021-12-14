import { IApiConstantsInterface } from "@/interfaces/api";

const apiConstants: IApiConstantsInterface = {
    baseUrl: "http://localhost:5280",
    productEndpoint: "/products",
    headers: { Accept: "application/json", "Content-Type": "application/json" }
};

export { apiConstants, IApiConstantsInterface };
