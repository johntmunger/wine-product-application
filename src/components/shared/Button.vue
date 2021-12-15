<template>
    <button type="button" class="btn btn-sm btn-primary">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
    name: "Button",
});
</script>