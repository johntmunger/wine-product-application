<template>
    <nav class="container cart-container">
        <div class="app-breadcrumb">
            <span><a href="/">home</a> / </span>
            <span><a href="/products">products</a> / </span>
            <span><a href="#">...</a></span>
        </div>

        <!-- TODO:: increment cart value -->
        <div class="app-shopping-cart">
            <span class="iconify" data-icon="clarity:shopping-cart-outline-badged"></span>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: "Nav",
}
</script>

<style scoped lang="scss">
.cart-container {
    padding: 1rem 2rem 2.5rem 1.15rem;

    & .app-breadcrumb {
        float: left;
        margin-top: 0.15rem;
    }
    & .app-breadcrumb a {
        // text-decoration: none;
        // pointer-events: none;
        color: #333;
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