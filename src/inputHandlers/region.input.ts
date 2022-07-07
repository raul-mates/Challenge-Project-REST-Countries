export const filterByRegion = () => {
    const countryContainer = [...document.querySelectorAll<HTMLDivElement>(".country__container")]!;
    const selectRegion = document.querySelector('.region-input')! as HTMLSelectElement;
    selectRegion.addEventListener('change', () => {
        let regionSelected = selectRegion.value;
        countryContainer.forEach(country => {
            country.dataset.region !== regionSelected ? country.parentElement!.classList.add('hidden') : country.parentElement!.classList.remove('hidden');
            if (regionSelected === '') country.parentElement!.classList.remove('hidden');
        })
    })
}