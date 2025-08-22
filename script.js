let targ = document.querySelector('.ig-link a')
let trig = document.querySelectorAll('.ig-link img')

let logo = document.querySelector('.logos img')
let home = document.querySelector('nav ul li a')

logo.addEventListener('click', e => {
    home.click()
})


trig[0].addEventListener('click', e => {
    targ.click();
})

trig[1].addEventListener('click', e => {
    targ.click();
})

