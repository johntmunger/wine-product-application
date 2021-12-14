<template>
  <div class="product-details container">
      <h4>Product Details</h4>
      <div>{{ product.title }}</div>
        <div class="image-container">
            <img :src="product.imageUrl" />
        </div>
      <div>${{ product.price }}</div>
      <div>{{ product.delivery }}</div>
        <hr />
      <h4>More Details</h4>
      <div>{{ detail.description }}</div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { IProduct } from "../../interfaces/product";
import { useRoute } from "vue-router";
import { appStoreService } from "../../services/appService";

export default {
    name: "ProductDetails",
    props: {
        // props go here
    },
    setup() {
        const product = ref({} as IProduct | undefined);
        const detail = ref({} as IProduct | undefined);
        const route = useRoute();

        onMounted(async () => {
            const int = Number(route.params.id);
            product.value = await appStoreService.getProduct(int);
            detail.value = await appStoreService.getProductDetails(int);
        });

        return {
            product,
            detail
        }
    }
}
</script>

<style scoped lang="scss">
.product-details {
    & .image-container {
        text-align: left;
        padding: 1.5rem;

        & img {
            width: 40%;
            height: 40%;
        }
    }
}
</style>