"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleThemeMode = void 0;
const toggleThemeMode = () => {
    const lightThemeMode = document.querySelector('.theme__mode--light');
    const darkThemeMode = document.querySelector('.theme__mode--dark');
    const themeContainer = document.querySelector('.container__theme-mode');
    themeContainer.addEventListener('click', (event) => {
        event.preventDefault();
        lightThemeMode.classList.toggle('hidden');
        darkThemeMode.classList.toggle('hidden');
        if (!darkThemeMode.classList.contains('hidden')) {
        }
    });
};
exports.toggleThemeMode = toggleThemeMode;
(0, exports.toggleThemeMode)();
//# sourceMappingURL=toggle.theme.js.map