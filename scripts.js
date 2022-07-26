const buyCta = document.getElementById('cta-buy')
const buyContainer = document.querySelector('.buy-container')
buyCta.addEventListener('mouseenter', () => {
    console.log('open', buyContainer)
    buyContainer.classList.add('open')
})
buyCta.addEventListener('mouseleave', () => {
    console.log('close')
    buyContainer.classList.remove('open')
})

const listenCta = document.getElementById('cta-listen')
const listenContainer = document.querySelector('.listen-container')
listenCta.addEventListener('mouseenter', () => {
    console.log('open', buyContainer)
    listenContainer.classList.add('open')
})
listenCta.addEventListener('mouseleave', () => {
    console.log('close')
    listenContainer.classList.remove('open')
})
