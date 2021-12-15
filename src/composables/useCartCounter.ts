import { ref } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCounter = (defaultCounter = 0) => {
    const counter = ref(defaultCounter);

    function onIncrement(count: number) {
        counter.value += count;
    }

    return {
        counter,
        onIncrement,
    }
};
