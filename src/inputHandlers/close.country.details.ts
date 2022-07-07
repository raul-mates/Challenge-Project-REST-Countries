export const closeCountryDetails = (): void => {
    const countryDetailsContainer = document.querySelector('.country__details-container')! as HTMLDivElement;
    const countriesSection = document.querySelector('.countries__section')! as HTMLElement;
    const inputsContainer = document.querySelector('.inputs__container')! as HTMLDivElement;
    const returnBtn = document.querySelector('.button__return')! as HTMLButtonElement;

    returnBtn.addEventListener('click', (e) => {
        e.preventDefault()
        countriesSection.style.display = '';
        inputsContainer.style.display = '';
        countryDetailsContainer.remove();
    })
}