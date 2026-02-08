const buttonTak = document.getElementById('tak');
const buttonNie = document.getElementById('nie');
const dalej = document.getElementById('start');

dalej.addEventListener('click', () => {
    ekran1.style.display = 'none';
    ekran2.style.display = 'block';
});

var cnt = 0;
buttonNie.addEventListener('click', () => { 

    if(cnt >= 5){
        buttonNie.remove();
        return;
    }
    cnt++;
    const currentWidthTak = buttonTak.offsetWidth;
    const currentHeightTak = buttonTak.offsetHeight;
    const currentFontSizeTak = parseFloat(window.getComputedStyle(buttonTak).fontSize);
    buttonTak.style.fontSize = currentFontSizeTak * 1.5 + "px";
    buttonTak.style.width = currentWidthTak * 2 + "px";
    buttonTak.style.height = currentHeightTak * 2 + "px";

    const currentWidthNie = buttonNie.offsetWidth;
    const currentHeightNie = buttonNie.offsetHeight;
    const currentFontSize = parseFloat(window.getComputedStyle(buttonNie).fontSize);
    buttonNie.style.height = currentHeightNie / 4 + "px";
    buttonNie.style.width = currentWidthNie / 4 + "px";
});

buttonTak.addEventListener('click', () => {
    alert('Wiedziałem, że się zgodzisz! Kocham Cię! :)');
});