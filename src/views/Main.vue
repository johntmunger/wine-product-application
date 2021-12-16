<template>
    <Header />
    <Nav />
    <main>
        <router-view />
    </main>
    <Footer />
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent ({
    name: "Main",
    components: {
        Header,
        Nav,
        Footer
    }
});
</script>