"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleViewStyle = void 0;
const toggleViewStyle = () => {
    const gridStyleButton = document.querySelector('.grid-icon');
    const listStyleButton = document.querySelector('.list-icon');
    const countriesSection = document.querySelector('.countries__section');
    gridStyleButton.addEventListener('click', () => {
        if (countriesSection.classList.value.includes('list-style')) {
            countriesSection.classList.replace('list-style', 'grid-style');
        }
    });
    listStyleButton.addEventListener('click', () => {
        if (countriesSection.classList.value.includes('grid-style')) {
            countriesSection.classList.replace('grid-style', 'list-style');
        }
    });
};
exports.toggleViewStyle = toggleViewStyle;
//# sourceMappingURL=toggle.view.style.js.map