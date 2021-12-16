<template>
    <div class="product-list">
        <div class="album py-3">
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
                                <h4 class="clickable-title"
                                    @click="fetchSingleProduct(product.id)">
                                    {{ product.title }}
                                </h4>
                                <SmallText>{{ product.size }}</SmallText>
                                <Price>${{ product.price }}</Price>
                                <SmallText>{{ product.delivery }}</SmallText>
                                <SmallText>{{ product.caseGift  }}</SmallText>

                                <!-- TODO:: use composable reactivity to increment cart value -->
                                <Buttons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { IProduct } from "@/interfaces/product";
import { appStoreService } from "@/services/appService";

// shared components
import Buttons from "@/components/shared/Buttons.vue";
import SmallText from "@/components/shared/SmallText.vue";
import Price from "@/components/shared/Price.vue";

export default defineComponent({
    name: "Products",
    components: {
        Buttons,
        SmallText,
        Price
    },
    setup() {
        const products = ref<IProduct[]>([]);
        const router = useRouter();

        onMounted(async () => {
            products.value = await appStoreService.getProducts();
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const replaceSpaceToDash = ((val: any) => {
            const urlString = val.replace(/\s/g , "-");

            return urlString;
        })
            
        const fetchSingleProduct = async(id: number): Promise<void> => {
            const val = await appStoreService.getProduct(id);
            const title = await appStoreService.getProductTitle(id);
            
            await router.push(`/products/${val.id}/${replaceSpaceToDash(title)}`);
        }

        return {
            products,
            fetchSingleProduct,
            replaceSpaceToDash
        }
    }
});
</script>

<style scoped lang="scss">
.product-list {
    padding-bottom: 2rem;

    & .card {
        min-height: 500px;
    }
}
.card-body {
    padding: 1.65rem;

    & .clickable-title {
        cursor: pointer;
        margin-bottom: 0;
    }
}
.thumbnail-container {
    text-align: center;
    padding: 1.5rem 1.25rem .5rem 1.25rem;

    & img {
        width: 75%;
        height: 75%;
    }
}
</style>