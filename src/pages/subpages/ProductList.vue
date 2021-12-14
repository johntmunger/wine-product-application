<template>
    <div class="product-list">
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="product in products" :key="product.id">
                        <div class="card shadow-sm">
                            <div class="thumbnail-container">
                                <a href="products/details"><img class="thumbnail" :src="product.imageUrl" /></a>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="products/details">{{ product.title }}</a>
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
import { Product } from "@/interfaces/product";
import { fakeStoreService } from "@/services/FakeService";

export default {
    name: "Products",
    setup() {
        const products = ref<Product[]>([]);

        onMounted(() => {
            fetchProducts();
        });

        const fetchProducts = async (): Promise<void> => {
            products.value = await fakeStoreService.getProducts();
        };

        return {
            products,
            fetchProducts,
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