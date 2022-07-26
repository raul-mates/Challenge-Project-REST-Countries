export const toggleViewStyle = ():void => {
    const gridStyleButton = document.querySelector('.grid-icon') as HTMLElement;
    const listStyleButton = document.querySelector('.list-icon') as HTMLElement;
    const countriesSection = document.querySelector('.countries__section') as HTMLDivElement;

    gridStyleButton.addEventListener('click', () => {
        if(countriesSection.classList.value.includes('list-style')) {
            countriesSection.classList.replace('list-style', 'grid-style');
        }
    })

    listStyleButton.addEventListener('click', () => {
        if(countriesSection.classList.value.includes('grid-style')) {
            countriesSection.classList.replace('grid-style', 'list-style');
        }
    })
}
