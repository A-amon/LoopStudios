window.onload = function () {
    handleNavbarMenu()
    handleNavScrollEffect()
    staggerCardAnimation()
}

//  setup stagger animation for .creations__card
//  fade in from top
function staggerCardAnimation () {
    const creationCardClass = ".creations__card"

    TweenMax.staggerFromTo(creationCardClass, 1, { opacity: 0, y: -50 }, { opacity: 1, y: 0 }, 0.2)
}

//  add scroll event handler
function handleNavScrollEffect () {
    document.addEventListener("scroll", () => {
        debounce(changeNavbarColor, 100)
    })
}

//  change navbar color when scrolled
function changeNavbarColor () {
    const navbar = document.getElementsByClassName("navbar")[0]

    const currentScroll = window.scrollY
    const classes = navbar.classList

    //  when scroll amount > 100
    if (currentScroll > 100 && !classes.contains("filled"))
        classes.add("filled")
    else if (currentScroll <= 100)
        classes.remove("filled")
}

//  debounce scroll event handler
function debounce (method, delay) {
    clearTimeout(method.timeout)    //clear the timeout set in prev call (none if first call)
    method.timeout = setTimeout(() => {     //timeout for calling changeNavbarColor method
        method()
    }, delay)
}

//  show/hide menu
function handleNavbarMenu () {
    const navbarMenu = document.getElementsByClassName("navbar__menu")[0]

    navbarMenu.addEventListener("click", () => {
        const classes = navbarMenu.classList
        if (classes.contains("show"))
            classes.remove("show")
        else
            classes.add("show")
    })
}