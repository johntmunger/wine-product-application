<template>
    <Header />
    <Nav />
    <main>
        <!-- Product List Component -->
        <ProductList />
    </main>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
import ProductList from '@/pages/ProductList.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Main",
    components: {
        Header,
        Nav,
        ProductList,
        Footer
    }
}
</script>