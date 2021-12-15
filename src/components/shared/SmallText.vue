<template>
    <div class="card-text">
        <small>
            <slot />
        </small>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
    name: "SmallText",
});
</script>

<style scoped lang="scss">
.card-text {
    & small {
        color: #333;
    }
}
</style>