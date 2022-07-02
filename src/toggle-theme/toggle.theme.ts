export const toggleThemeMode = (): void => {
    const lightThemeMode = document.querySelector('.theme__mode--light') as HTMLAnchorElement;
    const darkThemeMode = document.querySelector('.theme__mode--dark') as HTMLAnchorElement;
    const themeContainer = document.querySelector('.container__theme-mode') as HTMLDivElement;

    themeContainer.addEventListener('click', (event) => {
        event.preventDefault();
        lightThemeMode.classList.toggle('hidden');
        darkThemeMode.classList.toggle('hidden');

        if (!darkThemeMode.classList.contains('hidden')) {

        }
    })
}

toggleThemeMode();

