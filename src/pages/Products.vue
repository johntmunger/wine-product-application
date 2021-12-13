<template>
    <div>
        <ProductList />
        <ProductDetails />
    </div>
</template>

<script>
import ProductList from '@/pages/subpages/ProductList.vue';
import ProductDetails from '@/pages/subpages/ProductDetails.vue';

export default {
    name: "Products",
    components: {
        ProductList,
        ProductDetails
    }
}
</script>