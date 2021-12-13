<template>
    <Header />
    <Nav />
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "Main",
    components: {
        Header,
        Nav,
        Footer
    }
}
</script>