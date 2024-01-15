AOS.init();

const btnMyWorks = document.querySelector ('#btn-my_works')
const btnCoddy = document.querySelector ('#btn-coddy')
const btnFrontendDeveloper = document.querySelector ('#btn-frontend_developer')
const btnWebMastering = document.querySelector ('#btn-web_mastering')
const coddyNav = document.querySelector ('.coddy-nav')
const myWorks = document.querySelector ('.my_works')
const frontendDeveloper = document.querySelector ('.frontend_developer')
const myWwebMastering = document.querySelector ('.web_mastering')



btnMyWorks.onclick = () => {
    myWorks.classList.remove('visible')
    coddyNav.classList.add('visible')
    frontendDeveloper.classList.add('visible')
    myWwebMastering.classList.add('visible')
    btnMyWorks.classList.add('active')
    btnCoddy.classList.remove('active')

}
btnCoddy.onclick = () => {
    if (btnCoddy.classList.contains('active')) {
        return
    } else {
        myWorks.classList.add('visible')
        coddyNav.classList.remove('visible')
        frontendDeveloper.classList.remove('visible')
        myWwebMastering.classList.add('visible')
        btnMyWorks.classList.remove('active')
        btnCoddy.classList.add('active')
        btnFrontendDeveloper.classList.add('active')
        btnWebMastering.classList.remove('active')
    }
}

btnFrontendDeveloper.onclick = () => {
    myWorks.classList.add('visible')
    frontendDeveloper.classList.remove('visible')
    myWwebMastering.classList.add('visible')
    btnFrontendDeveloper.classList.add('active')
    btnWebMastering.classList.remove('active')

}
btnWebMastering.onclick = () => {
    myWorks.classList.add('visible')
    frontendDeveloper.classList.add('visible')
    myWwebMastering.classList.remove('visible')
    btnFrontendDeveloper.classList.remove('active')
    btnWebMastering.classList.add('active')
}
