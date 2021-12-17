<template>
  <div class="product-details container">

    <div class="row align-items-md-stretch">
        <div class="col-md-6">
            <div class="h-100">
                <div class="image-container"><img :src="product.imageUrl" /></div>
            </div>
        </div>
        <div class="details col-md-6">
            <div class="h-100">
                <h2>{{ product.title }}</h2>
                <SmallText>{{ product.size }}</SmallText>
                <Price>${{ product.price }}</Price>
                <SmallText>{{ product.delivery }}</SmallText>
                <SmallText><strong>{{ product.caseGift }}</strong></SmallText>

                <Buttons />

                <div class="bulleted-details">
                    <div>Brand:<span>{{ detail.brand }}</span></div>
                    <div>Area:<span>{{ detail.state }}</span></div>
                    <div>Region:<span>{{ detail.region }}</span></div>
                    <div>Sku:<span>{{ detail.sku }}-1</span></div>
                </div>
                
                <hr />
                <h4>More Details</h4>
                <p class="description">{{ detail.description }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import { IProduct } from "@/interfaces/product";
import { useRoute } from "vue-router";
import { appStoreService } from "@/services/appService";

// shared components
import Buttons from "@/components/shared/Buttons.vue";
import SmallText from "@/components/shared/SmallText.vue";
import Price from "@/components/shared/Price.vue";

export default defineComponent ({
    name: "ProductDetails",
    components: {
        Buttons,
        SmallText,
        Price
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
            detail,
        }
    }
});
</script>

<style scoped lang="scss">
.product-details {
    & h2 {
        margin-bottom: 0.3rem;
    }
    & .image-container {
        text-align: center;
        padding-bottom: 2rem;
        padding-top: 0.7rem;

        & img {
            width: 99%;
            height: 99%;
        };
    }

    & .details {
        padding: 0 1.25rem;

        .bulleted-details {
            padding: .5rem 0 0.7rem;

            & div {
                font-weight: 600;
            }
            & span {
                margin-left: 0.6rem;
                font-weight: 400;
            }
        }

        & .description {
            margin-bottom: 2rem;
        }
    }
}
</style>