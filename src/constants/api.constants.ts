import { ApiConstantsInterface } from "@/interfaces/api";

const apiConstants: ApiConstantsInterface = {
    baseUrl: "http://localhost:5280",
    productEndpoint: "/products",
    headers: { Accept: "application/json", "Content-Type": "application/json" }
    // headers: {'Access-Control-Allow-Origin': '*'}
};

export { apiConstants, ApiConstantsInterface };