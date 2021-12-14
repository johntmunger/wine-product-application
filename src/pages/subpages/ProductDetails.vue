<template>
  <div class="product-details container">
      <h4>Product Details</h4>
      {{ product }} <br><br><br>
      {{ detail }}
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
        // props go here?
    },
    setup() {
        const product = ref({} as IProduct | undefined);
        const detail = ref({} as IProduct | undefined);
        const route = useRoute();

        onMounted(async () => {
            const int = Number(route.params.id);
            product.value = await appStoreService.getProduct(int);
            detail.value = await appStoreService.getProductDetail(int);
        });

        return {
            product,
            detail
        }
    }
}
</script>