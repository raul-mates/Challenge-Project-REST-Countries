export type VoidReturnFn = () => void;

export const debounce = (func: Function, time: number): VoidReturnFn => {
    let timerId: NodeJS.Timeout;
    return function (this: unknown) {
        let context = this;
        let args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(context, args);
        }, time);
    }
}
