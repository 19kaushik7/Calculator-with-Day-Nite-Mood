const displayEl = document.querySelector('#display');
const buttonEl = document.querySelectorAll('button');
buttonEl.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            displayEl.innerHTML = "";
        }
        else if (item.id == 'backspace') {
            let string = displayEl.innerHTML.toString();
            displayEl.innerHTML = string.substr(0,string.length -1)
        }
        else if (item.id == 'equal' && displayEl.innerHTML != '') {
            displayEl.innerHTML = eval(displayEl.innerHTML);
        }
        else if (item.id == 'equal' && displayEl.innerHTML == '') {
            displayEl.innerHTML = "Empty!";
            setTimeout(() => {
                displayEl.innerHTML = "";
            }, 2000);
        }
        else {
            displayEl.innerHTML += item.id;
        }
    }
})
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculaterEl= document.querySelector('.calculater');
const togglerIcon= document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculaterEl.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}