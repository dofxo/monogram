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

// hamburger menu event listener
const rowClass = document.getElementsByClassName('row')
const mainMenu = document.getElementById('main-menu')
const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon')
const hamburgerMenu = document.getElementById('hamburger-menu')
hamburgerMenuIcon.addEventListener('click', () => {
    if (!hamburgerMenu.classList.contains('hamburger-menu-apear')) {
        hamburgerMenu.classList.add('hamburger-menu-apear')
        rowClass[0].classList.add('hamburger-icon-change-top')
        rowClass[1].style.display = 'none'
        rowClass[2].classList.add('hamburger-icon-change-bottom')
    }
    else {
        hamburgerMenu.classList.remove('hamburger-menu-apear')
        rowClass[0].classList.remove('hamburger-icon-change-top')
        rowClass[1].style.display = ''
        rowClass[2].classList.remove('hamburger-icon-change-bottom')

    }

})
// hamburger menu event listener END