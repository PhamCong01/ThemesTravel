
const inputTour = document.querySelectorAll('.tour__input')
const inputEmail = document.querySelector('.check__email')
const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const inputPhone = document.querySelector('.check__phone')
const checkPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
const descriptionElement = document.querySelectorAll('.tour__description--link')
const iconContainer = document.querySelectorAll('.tour__faq--icon')
const iconAdd = document.querySelectorAll('.fa-plus')
const iconMinus = document.querySelectorAll('.fa-minus')
const tourDescription = document.querySelectorAll('.tour__faq--block')
function checkInput() {
    for (let i = 0; i < inputTour.length; i++) {
        inputTour[i].onblur = function (e) {
            if(e.target.value == '') {
                inputTour[i].classList.add('input__name')
            } else {
                inputTour[i].classList.remove('input__name')
            }
            inputEmail.onblur = function (e) {
                if (!e.target.value.match(checkEmail)) {
                    inputEmail.classList.add('input__name')
                } else {
                    inputEmail.classList.remove('input__name')
                }
            }
           
        }
        inputTour[i].oninput = function (e) {
            if(e.target.value) {
                inputTour[i].classList.remove('input__name')
            }
        }
    }
   
}


function hoverElement() {
    for(let i = 0; i < descriptionElement.length; i++) {
        descriptionElement[i].addEventListener('mouseover',function () {
            descriptionElement[i].classList.add('tour__block')
        })
        descriptionElement[i].addEventListener('mouseout',function () {
            descriptionElement[i].classList.remove('tour__block')
        })

    }
}


function tourFaq () {
    for(let i = 0; i < iconContainer.length; i++) {
            iconContainer[i].onclick = function () {
                iconAdd[i].classList.toggle('fa-plus--block')
                iconMinus[i].classList.toggle('fa-minus--block')
                const checkIcon =  iconMinus[i].classList.contains('fa-minus--block')
                if(checkIcon) {
                    tourDescription[i].style.display = 'block'
                }else {
                    tourDescription[i].style.display = 'none'
                    
                }
            } 
    }
}
function start() {
    checkInput()
    hoverElement()
    tourFaq()
}

start()