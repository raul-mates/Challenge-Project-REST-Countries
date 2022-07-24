"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
const debounce = (func, time) => {
    let timerId;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(context, args);
        }, time);
    };
};
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map