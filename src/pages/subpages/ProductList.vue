<template>
    <div class="product-list">
        <div class="album py-3 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="product in products" :key="product.id">
                        <div class="card shadow-sm">
                            <div class="thumbnail-container">
                                 <a href="#" @click="fetchSingleProduct(product.id)">
                                     <img class="thumbnail" :src="product.imageUrl" />
                                </a>
                            </div>
                            <div class="card-body">
                                <h4 class="clickable-title" @click="fetchSingleProduct(product.id)">{{ product.title }}</h4>
                                <small class="card-text">{{ product.size }}</small>
                                <p class="card-text price">${{ product.price }}</p>
                                <small>
                                    <div>{{ product.delivery }}</div>
                                    <div>{{ product.caseGift }}</div>
                                </small>
                                <button type="button" class="btn btn-sm btn-outline-primary">{{ product.btnSingle }}</button>
                                <button type="button" class="btn btn-sm btn-outline-primary">{{ product.btnCase }}</button>
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
.card-body {
    padding: 1.65rem;

    & .clickable-title {
        cursor: pointer;
        margin-bottom: 0;
    }
    & .price {
        font-size: 1.125rem;
        font-weight: bold;
        margin-top: .5rem;
        margin-bottom: 1rem;
    }
    & button {
        margin: 1.5rem .65rem 0 0;
    }
}

.thumbnail-container {
    text-align: center;
    padding: 1.5rem 1.25rem .25rem 1.25rem;

    & img {
        width: 75%;
        height: 75%;
    }
}
</style>