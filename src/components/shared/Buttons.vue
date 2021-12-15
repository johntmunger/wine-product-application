<template>
    <div class="button-container">
        <!-- TODO:: use composable reactivity to increment cart value -->
        <Button @click.prevent="onIncrement(1)" disabled>Add to Cart</Button>
        <Button @click.prevent="onIncrement(6)" disabled>Add Case to Cart</Button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

// TODO:: composables
// import { useStatefulComposable } from "@/composables/useStateful";
// import { useCounter } from "@/composables/useCartCounter";

export default defineComponent ({
    name: "Buttons",
    components: {
        Button
    },
});
</script>

<style scoped lang="scss">
.button-container {
    margin: 1.5rem 0 0 0;
    
    & button {
        width: 100%;
        margin-bottom: .7rem;
    }
}

@media (min-width: 889px) {
    button {
        width: auto !important;
        margin: .5rem .5rem 0 0;
    }
}
</style>