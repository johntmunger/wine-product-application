<template>
    <nav class="container cart-container">
        <div class="app-breadcrumb">
            <span><a href="/">...</a></span>
            <span> / <a href="/products">wine</a></span>
            <span v-if="title"> / <a href="#">{{ title }}</a></span>
        </div>

        <!-- TODO:: increment cart value -->
        <div class="app-shopping-cart">
            <span class="iconify" data-icon="clarity:shopping-cart-outline-badged"></span>
        </div>
    </nav>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
    setup() {
        const route = useRoute();
        const title = computed(() => route.params.title);

        return {
            title,
        }
    }
};
</script>

<style scoped lang="scss">
.cart-container {
    padding: 1rem 2rem 2.5rem 1.15rem;

    & .app-breadcrumb {
        float: left;
        margin-top: 0.15rem;
    }
    & .app-breadcrumb a {
        color: #333;
    }
    & .app-breadcrumb span:first-child a {
        text-decoration: none;
    }
    & .app-breadcrumb span:last-child a {
        text-decoration: none;
        pointer-events: none;
    }
    & .app-shopping-cart {
        float: right;
        margin-right: -3px;
        margin-top: -2px;
    }
    & svg {
        width: 2rem;
        height: 2rem;
        color: #333;
    }
}
</style>