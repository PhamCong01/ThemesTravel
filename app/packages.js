
const option = document.querySelector('.search__input--list')
const elementValue1 = $('.value1')
const elementValue2 = $('.value2')
const elementValue3 = $('.value3')
const elementValue4 = $('.value4')
const elementValue5 = $('.value5')
const elementValue6 = $('.value6')
const range = $('.search__input-range')
const rangeNumber = $('.search__input--number')
const checkNone = $('.none')
;(function options() {
    option.onchange = function(e) {
        if(e.target.value == 1) {
            elementValue1.style.display = 'block'
            elementValue2.style.display = 'block'
            elementValue3.style.display = 'block'
            elementValue4.style.display = 'block'
            elementValue5.style.display = 'block'
            elementValue6.style.display = 'block'
            
        }
        if(e.target.value == 2) {
            elementValue2.style.display = 'none'
            elementValue3.style.display = 'none'
            elementValue4.style.display = 'none'
        } else {
            elementValue2.style.display = 'block'
            elementValue3.style.display = 'block'
            elementValue4.style.display = 'block'
        }
        if(e.target.value == 3) {
            elementValue1.style.display = 'none'
            elementValue2.style.display = 'none'
            elementValue3.style.display = 'none'
        } 

        if(e.target.value == 4) {
            elementValue4.style.display = 'none'
            elementValue5.style.display = 'none'
            elementValue6.style.display = 'none'
        }

        if(e.target.value == 5) {
            elementValue1.style.display = 'none'
            elementValue2.style.display = 'none'
            elementValue3.style.display = 'none'
        } else {
            elementValue1.style.display = 'block'
            elementValue2.style.display = 'block'
            elementValue3.style.display = 'block'
        }

        if(e.target.value == 6) {
            elementValue4.style.display = 'none'
            elementValue5.style.display = 'none'
            elementValue6.style.display = 'none'
        } 
    }

})()

function ranges() {
    range.oninput = function (e) {
        rangeNumber.innerText = e.target.value + '$'
        if(e.target.value < 400) {
            elementValue1.style.display = 'none'
            elementValue2.style.display = 'none'
            elementValue3.style.display = 'none'
            elementValue4.style.display = 'none'
            elementValue5.style.display = 'none'
            elementValue6.style.display = 'none'
            checkNone.style.display = 'block'
        } else {
            elementValue1.style.display = 'block'
            elementValue2.style.display = 'block'
            elementValue4.style.display = 'block'
            elementValue3.style.display = 'block'
            elementValue5.style.display = 'block'
            elementValue6.style.display = 'block'
            checkNone.style.display = 'none'
        }
        if(e.target.value > 399 && e.target.value < 700) {
            elementValue1.style.display = 'none'
            elementValue2.style.display = 'none'
            elementValue4.style.display = 'none'
            elementValue5.style.display = 'none'
            elementValue6.style.display = 'none'
        } 
        if(e.target.value > 699 && e.target.value < 731) {
            elementValue1.style.display = 'block'
            elementValue2.style.display = 'none'
            elementValue3.style.display = 'block'
            elementValue4.style.display = 'none'
            elementValue5.style.display = 'none'
            elementValue6.style.display = 'block'
        } 
        if(e.target.value < 1000) {
            elementValue2.style.display = 'none'
            elementValue4.style.display = 'none'
            elementValue5.style.display = 'none'
        }
        if(e.target.value < 1200) {
            elementValue4.style.display = 'none'

        }
        if(e.target.value < 1500) {
            
            elementValue5.style.display = 'none'
        }
       
    }
}
function start() {
    ranges()
}

start();