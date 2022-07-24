import { debounce } from "./debounce";

export const searchInputHandler = () => {
    const searchInput = document.querySelector('.search-input')! as HTMLInputElement;
    const countryContainer = [...document.querySelectorAll<HTMLDivElement>(".country__container")]!;
    const selectRegion = document.querySelector('.region-input')! as HTMLSelectElement;


    searchInput.addEventListener('input', debounce((e: Event) => {
            e.preventDefault();
            selectRegion.value = '';
            countryContainer.forEach(country => {
                if (searchInput.value.length === 0 && selectRegion.value === '') country.parentElement!.classList.remove('hidden');
                if (searchInput.value.length === 0 && country.dataset.region === selectRegion.value) country.parentElement!.classList.remove('hidden');
                !country.dataset.name!.toLowerCase().startsWith(`${searchInput.value.toLowerCase()}`) ? country.parentElement!.classList.add('hidden') : country.parentElement!.classList.remove('hidden')
            })
        }, 300)
    );
};

