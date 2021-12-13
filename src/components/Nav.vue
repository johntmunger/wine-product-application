<template>
    <nav class="container cart-container">
        <div class="fake-breadcrumb">
            <span><a href="#">home</a> / </span>
            <span><a href="#">wine</a> / </span>
            <span><a href="#">product name</a></span>
        </div>
        <div class="fake-shopping-cart">
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
    padding: 1rem 2rem 2.5rem 1.25rem;

    & .fake-breadcrumb {
        float: left;
    }
    & .fake-breadcrumb a {
        color: sienna;
    }
    & .fake-breadcrumb a:last-child {
        text-decoration: none;
    }
    & .fake-shopping-cart {
        float: right;
    }
    & svg {
        width: 2rem;
        height: 2rem;
        color: sienna;
    }
}
</style>