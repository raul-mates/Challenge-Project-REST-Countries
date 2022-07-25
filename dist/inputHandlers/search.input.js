"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInputHandler = void 0;
const debounce_1 = require("./debounce");
const searchInputHandler = () => {
    const searchInput = document.querySelector(".search-input");
    const countryContainer = [
        ...document.querySelectorAll(".country__container"),
    ];
    const selectRegion = document.querySelector(".region-input");
    const searchButton = document.querySelector(".button__search-icon");
    searchInput.addEventListener("input", (0, debounce_1.debounce)((e) => {
        e.preventDefault();
        selectRegion.value = "";
        countryContainer.forEach((country) => {
            if (searchInput.value.length === 0 && selectRegion.value === "")
                country.parentElement.classList.remove("hidden");
            if (searchInput.value.length === 0 &&
                country.dataset.region === selectRegion.value)
                country.parentElement.classList.remove("hidden");
            !country.dataset
                .name.toLowerCase()
                .startsWith(`${searchInput.value.toLowerCase()}`)
                ? country.parentElement.classList.add("hidden")
                : country.parentElement.classList.remove("hidden");
        });
    }, 300));
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
    });
};
exports.searchInputHandler = searchInputHandler;
//# sourceMappingURL=search.input.js.map