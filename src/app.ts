const fetchCountries = async () => {
    const fetchedData = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await fetchedData.json();
    console.log(data)
    renderCountry(data);
}

fetchCountries();

const renderCountry = (countries: any[]) => {
    const countrySection = document.querySelector(".countries__section") as HTMLElement;

    countries.forEach(country => {
        countrySection.insertAdjacentHTML('beforeend', `
    <div class="country__container">
            <img src="${country.flags.png}" alt="" class="country__flag">
            <ul class="country__list">
                <li class="country__list--item">Population: ${country.population}</li>
                <li class="country__list--item">Region: ${country.region}</li>
                <li class="country__list--item">Capital: ${country.capital}</li>
            </ul>
        </div>
    `)
    })
}