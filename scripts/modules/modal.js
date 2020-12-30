const lock = document.querySelector('.ok')
const selectChampion = document.querySelector('.select-container')
const modal = document.querySelector('section.modal')



lock.addEventListener('click', () => {
    selectChampion.style.transition = '.s'
    selectChampion.style.animation = 'back .4s forwards'
    selectChampion.style.opacity = '0.4'

    modal.classList.add('active')

})

if (document.body.clientWidth <= 880) {
    lock.click()
    document.querySelector('.modal h1').innerText = 'não tem como fazer\n responsivo kk'
} else {
    document.querySelector('.modal h1').innerText = 'Conheça mais sobre mim'

}
window.onload = (() => {
    window.addEventListener('resize', (event) => {
        console.log('oi')
        if (document.body.clientWidth <= 880) {
            lock.click()
            document.querySelector('.modal h1').innerText = 'não tem como fazer\n responsivo kk'
        } else {
            document.querySelector('.modal h1').innerText = 'Conheça mais sobre mim'

        }
    })
})