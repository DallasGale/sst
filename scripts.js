const moreInfoCta = document.querySelector('#info-cta')
const readMoreContainer = document.querySelector('.read-more')
const moreInfoCtaText = document.querySelector('.read-more-btn-text')
const buyCta = document.querySelector('#buy-cta')
const buyContainer = document.querySelector('#buy-container')

moreInfoCta.addEventListener('click', () => {
    readMoreContainer.classList.toggle('open')
    setTimeout(() => {
        if (buyContainer.classList.contains('show')) {
            console.log('contains show')
            buyContainer.classList.remove('show')
            buyContainer.classList.add('hide')
        }
    }, 0)
})

buyCta.addEventListener('click', () => {
    buyContainer.classList.remove('hide')
    buyContainer.classList.add('show')
    if (readMoreContainer.classList.contains('open')) {
        readMoreContainer.classList.remove('open')
    }
})
