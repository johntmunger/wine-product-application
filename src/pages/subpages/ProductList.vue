<template>
    <div class="product-list">
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="product in products" :key="product.id">
                        <div class="card shadow-sm">
                            <img :src="product.imageUrl" height="50" />
                            <div class="card-body">
                            <p class="card-text">{{ product.size }}</p>
                            <p class="card-text">{{ product.reviews }}</p>
                            <p class="card-text">{{ product.likes }}</p>
                            <p class="card-text">${{ product.proce }}</p>
                            <p class="card-text">{{ product.caseGift }}</p>
                            <p class="card-text">{{ product.caseAvailability }}</p>
   
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="products/details" class="btn btn-sm btn-outline-secondary">View</a>
                                    <a href="products/details" class="btn btn-sm btn-outline-secondary">{{ product.btnSingle }}</a>
                                </div>
                                <small class="text-muted">{{ product.likes }} likes</small>
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

export default {
    name: "ProductList",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setup() {
        const products = ref([]);

        onMounted(async () => {
            const response = await fetch("http://localhost/5280/products");
            console.log(response.json());
            products.value = await response.json();
        })

        return {
            products
        }
    }
}
</script>