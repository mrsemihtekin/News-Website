const signBtn = document.querySelector('.sign-button')
const signContainer = document.querySelector('.sign-container')
const slideContainer = document.querySelector('.slide-container')
const slides = document.querySelectorAll('.slide')
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')
const progressBar = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')

signContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('sign-button')) {
        signContainer.classList.add('bigger')
        signContainer.innerHTML = `
            <button class="login-btn btn">Login</button>
            <button class="subscribe-btn btn">Subscribe</button>
            <button class="x-button"><i class="fa-solid fa-x"></i></button>
        `
    } else if (e.target.classList.contains('x-button') || e.target.classList.contains('fa-x')) {
        signContainer.classList.remove('bigger')
        signContainer.innerHTML = `
            <button class="sign-button">Click İt To Sign</button>
            `
    }
})

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        slides.forEach((slide) => {
            slide.parentElement.classList.remove('active')
        })
        slide.parentElement.classList.add('active')
    })
})

function updateSlides() {
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, idx) => {
        if (idx === currentActive - 1) {
            slide.parentElement.classList.add('active')
        } else {
            slide.parentElement.classList.remove('active')
        }
    })
}

let progress = 0
let currentActive = 1
const perceantWidth = (1 / (circles.length - 1)) * 100


nextButton.addEventListener('click', increasingUpdate)
prevButton.addEventListener('click', decreasingUpdate)

function increasingUpdate() {
    if (progress < 100) {
        progress += perceantWidth
        progressBar.style.width = progress + '%'
    }
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    updateCircles()
    updateButtons()
    updateSlides()
}

function decreasingUpdate() {
    if (progress > 0) {
        progress -= perceantWidth
        progressBar.style.width = progress + '%'

    }
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    updateCircles()
    updateButtons()
    updateSlides()
}

function updateButtons() {
    nextButton.disabled = progress >= 100 ? true : false
    prevButton.disabled = progress <= 0 ? true : false
}

function updateCircles() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })
}

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    function updateCounter() {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
        
    }

    updateCounter()
})




    

    