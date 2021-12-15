<template>
     <p class="card-text price">
        <slot />
    </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
    name: "Price",
});
</script>

<style scoped lang="scss">
.card-text.price {
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: .5rem;
    margin-bottom: 1rem;
}
</style>