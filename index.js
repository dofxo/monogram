// script for dropDown menu
const dropDownEl = document.getElementById('dropDown')
const menuEl = document.getElementById('menu')

function newMenu() {
    if (menuEl.style.display != 'flex') {
        menuEl.style.display = 'flex'
    }
    else {
        menuEl.style.display = 'none'
    }
}
dropDownEl.addEventListener('click', newMenu)
// script for dropDown menu END