const menuClass = document.querySelector('.menu')
const hamburgerMenu = document.getElementById('hamburger-menu')
const backgroundBody = document.getElementById('background')
const buttons = document.querySelectorAll(".box")


const toggleHamburgerMenu = function () {
    hamburgerMenu.addEventListener('click', function () {
        menuClass.classList.toggle('hide-menu')
    })
}

const changeBackground = function () {
    buttons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            backgroundBody.removeAttribute("class")
            backgroundBody.classList.add(e.target.classList[1])
            menuClass.classList.toggle('hide-menu')
        })
    })
}

toggleHamburgerMenu();
changeBackground();


