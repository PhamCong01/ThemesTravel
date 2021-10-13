const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const iconBarsRight = $$('.icon__bars-right')
const headerList = $$('.header__bars--child')
const iconBars = $('.header__icon-bars')
const navbar = $('.header__bars')
const overlay = $('.overlay')
const iconLeft = $('.icon__slider--left') 
const iconRight = $('.icon__slider--right') 
const sliderElement = $$('.slider__border')
const overlayElement = $('.experience__overlay')
const videoElement = $('.video')
const btnPlay = $('.experience__image--play')
const exit = $('.icon__exit')
const dayElement = $('.day')
const hourElement = $('.hour')
const minuteElement = $('.minute')
const secondElement = $('.second')
var count = 0
const serviceContainer = $('.services__content')

function start () {
    open()
    slider()
    video()
    time()
}

start()

function open () {
    for(let i = 0; i < iconBarsRight.length; i++) {
        iconBarsRight[i].onclick = function() {
            iconBarsRight[i].classList.toggle('icon__bars-right-block')
            headerList[i].classList.toggle('header__bars--child--block')
    }
    
    }

    iconBars.onclick = function() {
        navbar.classList.toggle('header__bars--block')
        overlay.classList.add('overlay--block')
    }
    exit.onclick = function() {
        navbar.classList.remove('header__bars--block')
        overlay.classList.remove('overlay--block')
    }
    overlay.onclick = function() {
        navbar.classList.remove('header__bars--block')
        overlay.classList.remove('overlay--block')

    }
}

function slider () {
    iconRight.onclick = function() {
        for(let i = 0; i < sliderElement.length;i++) {
            sliderElement[i].style.display = 'none'
        }
            count++
            if(count > sliderElement.length - 1) {
                count = 0
            }
            sliderElement[count].style.display = "block"
            
    }
    iconLeft.onclick = function() {
        for(let i = 0; i < sliderElement.length;i++) {
            sliderElement[i].style.display = 'none'
        }
            count--
            if(count < 0) {
                count =  sliderElement.length - 1
            }
            sliderElement[count].style.display = "block"
    }
    setInterval(function() {
        for(let i = 0; i < sliderElement.length;i++) {
            sliderElement[i].style.display = 'none'
        }
            count++
            if(count > sliderElement.length - 1) {
                count = 0
            }
            sliderElement[count].style.display = "block"
    },10000)
}

function video () {
    btnPlay.onclick = function() {
        overlayElement.classList.add('experience__overlay--block')
        videoElement.classList.add("video--block")
    }
    overlayElement.onclick = function() {
        overlayElement.classList.remove('experience__overlay--block')
        videoElement.classList.remove("video--block")
    }
}


var listServices = [
    {
        id: 1,
        image:'image/ico-01.png',
        title:'Insurance',
        description:'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
        button: 'View More'
    },

    {
        id: 2,
        image:'image/ico-02.png',
        title:'Medical Care',
        description:'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
        button: 'View More'
    },

    {
        id: 3,
        image:'image/ico-03.png',
        title:'Meals Included',
        description:'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
        button: 'View More'
    },

    {
        id: 4,
        image:'image/ico-04.png',
        title:'Accessibility',
        description:'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
        button: 'View More'
    },

    {
        id: 5,
        image:'image/ico-05.png',
        title:'Customer Care',
        description:'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
        button: 'View More'
    },

    {
        id: 6,
        image:'image/ico-06.png',
        title:'Shuttle Included',
        description:'Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.',
        button: 'View More'
    },
]

var list = listServices.map(function(service) {
    return `
       <div class="col l-4 c-12 m-6 services_border">
            <img class="services__image" src="${service.image}" alt="">
            <div class="content__title">
                <h1 class="content__h1">${service.title}</h1>
                <p>${service.description}</p>
                <button class="services__btn">View More</button>
            </div>
       </div>
    `
})
serviceContainer.innerHTML = list.join('')

function time () {
    var times = new Date()
    dayElement.innerText = times.getDay() 
    if( times.getDay()== 0) {
        dayElement.innerText = 8
    }
    hourElement.innerText = times.getHours()
    minuteElement.innerText = times.getMinutes()
    secondElement.innerText = times.getSeconds()
}
