import { reactive } from "vue";

const globalState = reactive({
    someString: "Initial Value",
    someNumber: 0,
    someBoolean: false
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useStatefulComposable = () => {
    const localState = reactive({
        someString: "Initial Value",
        someNumber: 0,
        someBoolean: false
    });

    const updateValues = (sValue: string, sNumber: number, bValue: boolean) => {
        // set global state values
        globalState.someString = sValue;
        globalState.someNumber = sNumber;
        globalState.someBoolean = bValue;

        // set local state values
        localState.someString = sValue;
        localState.someNumber = sNumber;
        localState.someBoolean = bValue;
    };

    return {
        globalState,
        localState,
        updateValues
    }
};
