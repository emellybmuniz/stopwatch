const buttonTheme = document.querySelector('.switch-theme-button')
const page = document.querySelector('html')

buttonTheme.addEventListener("click", () => {
    page.classList.toggle('dark-mode');
    page.style.transition = '0.4s';
    const img = buttonTheme.querySelector('img');

    if(page.classList.contains('dark-mode')) {
        img.src = 'src/imagens/light-theme-icon.png';
    } else {
        img.src = 'src/imagens/dark-theme-icon.png';
    }
});