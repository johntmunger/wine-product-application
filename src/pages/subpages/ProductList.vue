<template>
    <div class="product-list">
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="product in products" :key="product.id">
                        <div class="card shadow-sm">
                            <div class="thumbnail-container">
                                 <button type="button" @click="fetchSingleProduct(product.id)">
                                     <img class="thumbnail" :src="product.imageUrl" />
                                </button>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <button type="button" @click="fetchSingleProduct(product.id)">
                                        {{ product.title }}
                                    </button>
                                </p>
                                <p class="card-text">{{ product.size }}</p>
                                <p class="card-text">${{ product.price }}</p>
                                <p class="card-text">{{ product.delivery }}</p>
                                <p class="card-text">{{ product.caseGift }}</p>
                                <div class="align-items-center">
                                    <div class="btn-group">
                                        <a href="#" class="btn btn-sm btn-outline-primary">{{ product.btnSingle }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { IProduct } from "@/interfaces/product";
import { appStoreService } from "@/services/appService";

export default {
    name: "Products",
    setup() {
        const products = ref<IProduct[]>([]);
        const router = useRouter();

        onMounted(() => {
            fetchAllProducts();
        });

        const fetchAllProducts = async (): Promise<void> => {
            products.value = await appStoreService.getProducts();
        };

        const fetchSingleProduct = async(id: number): Promise<void> => {
            const val = await appStoreService.getProduct(id);
            await router.push(`/products/${val.id}`);
        }

        return {
            products,
            fetchAllProducts,
            fetchSingleProduct
        }
    }
}
</script>

<style scoped lang="scss">
.card {
    min-height: 500px;
}
.thumbnail-container {
    text-align: center;
    padding: 1.25rem;

    & img {
        width: 80%;
        height: 80%;
    }
}
</style>