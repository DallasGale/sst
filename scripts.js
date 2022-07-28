// const buyCta = document.getElementById('cta-buy')
// const buyContainer = document.querySelector('.buy-container')
// buyCta.addEventListener('mouseenter', () => {
//     console.log('open', buyContainer)
//     buyContainer.classList.add('open')
// })
// buyCta.addEventListener('mouseleave', () => {
//     console.log('close')
//     buyContainer.classList.remove('open')
// })

// const listenCta = document.getElementById('cta-listen')
// const listenContainer = document.querySelector('.listen-container')
// listenCta.addEventListener('mouseenter', () => {
//     console.log('open', buyContainer)
//     listenContainer.classList.add('open')
// })
// listenCta.addEventListener('mouseleave', () => {
//     console.log('close')
//     listenContainer.classList.remove('open')
// })

const readMoreBtn = document.querySelector('.read-more-btn')
const readMoreContainer = document.querySelector('.read-more')
const readMoreBtnText = document.querySelector('.read-more-btn-text')

readMoreBtn.addEventListener('click', () => {
    readMoreContainer.classList.toggle('open')
    setTimeout(() => {
        readMoreBtnText.textContent = 'Read more'
        if (readMoreContainer.classList.contains('open')) {
            readMoreBtnText.textContent = 'Read less'
        }
    }, 0)
})

const epImg = document.querySelector('.ep-artwork')
const footer = document.querySelector('.footer')

epImg.addEventListener('mouseover', () => {
    footer.classList.remove('hide')
    footer.classList.add('show')
})
