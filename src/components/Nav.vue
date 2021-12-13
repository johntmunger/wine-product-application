<template>
    <nav class="container cart-container">
        <div class="app-breadcrumb">
            <span><a href="#">home</a> / </span>
            <span><a href="#">wine</a> / </span>
            <span><a href="#">product_name</a></span>
        </div>
        <div class="app-shopping-cart">
            <span class="iconify" data-icon="clarity:shopping-cart-outline-badged"></span>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style scoped lang="scss">
.cart-container {
    padding: 1rem 2rem 2.5rem 1.15rem;

    & .app-breadcrumb {
        float: left;
    }
    & .app-breadcrumb a {
        text-decoration: underline;
        color: saddlebrown;
    }
    & .app-breadcrumb span:last-child a {
        text-decoration: none;
        pointer-events: none;
    }
    & .app-shopping-cart {
        float: right;
    }
    & svg {
        width: 2rem;
        height: 2rem;
        color: saddlebrown;
    }
}
</style>