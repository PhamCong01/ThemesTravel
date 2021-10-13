
const sliderContainer = document.querySelector('.bora__image--border')
const iconRights = document.querySelector('.fa-angle-right')
const iconLefts = document.querySelector('.fa-angle-left')
const sliderImage = document.querySelectorAll('.bora__slider--image')
var counts= 0
const priceContainer = document.querySelector('.bora__people--price')
const selectElement = document.querySelector('.bora__people--select')
const priceElement = document.querySelector('#price')
const addElement = document.querySelector('.price__btn')
const clear = document.querySelector('.bora__people--btn')
const category = document.querySelector('#category')
const boraDescriptionElement = document.querySelectorAll('.bora__description--container')
const boraDescriptionContent = document.querySelectorAll('.bora__description--content-one')
const boraDescriptionBorder = document.querySelectorAll('.bora__description--border')
const inputName = document.querySelector('input[name]')
const inputEmail = document.querySelector('#email')
const inputMessage = document.querySelector('.review__input-message')
const inputMessageEmail = document.querySelector('.review__input-message-email')
const productContainer = document.querySelector('.product__container')
function handleSlider () {
    iconRights.onclick = function () {
        for(let i = 0; i < sliderImage.length;i++) {
          sliderImage[i].style.display = 'none'
        }
          ++counts
          if(counts > sliderImage.length - 1) {
              counts = 0
          }
          sliderImage[counts].style.display ="block"
      } 
    iconLefts.onclick = function () {
        for(let i = 0; i < sliderImage.length;i++) {
          sliderImage[i].style.display = 'none'
        }
          --counts
          if(counts < 0) {
              counts = sliderImage.length - 1
          }
          sliderImage[counts].style.display ="block"
      } 
}
function autoSlider() {
    var autoSliderElement = setInterval(function () {
        for(let i = 0; i < sliderImage.length;i++) {
            sliderImage[i].style.display = 'none'
          }
        ++counts
        if(counts > sliderImage.length - 1) {
            counts = 0
        }
        sliderImage[counts].style.display ="block"
    },2000)

    sliderContainer.addEventListener('mouseover',function() {
        clearInterval(autoSliderElement)
    })

    sliderContainer.addEventListener('mouseout',function() {
        autoSlider()
    })
    
}

function sumPrice(prices) {
    return `${prices * 1},00`
}

function price() {
    selectElement.onchange = function(e) {
        if(e.target.value == 0) {
            priceContainer.style.display = "none"
            addElement.classList.add('price__btn--none')
            category.innerText = 'N/A'
        } else {
            priceContainer.style.display = "block"
            addElement.classList.remove('price__btn--none')
        }
        if(e.target.value == 1) {
            priceElement.innerText = sumPrice(1000)
            category.innerText = '1 - person'
        } else if(e.target.value == 2) {
            priceElement.innerText = sumPrice(1200)
             category.innerText = '2 - person'
        } else if(e.target.value == 3) {
            priceElement.innerText = sumPrice(1400)
             category.innerText = '3 - person'
        } else if(e.target.value == 4) {
            priceElement.innerText = sumPrice(1600)
             category.innerText = '4 - person'
        } else if(e.target.value == 5) {
            priceElement.innerText = sumPrice(1800)
             category.innerText = '5 - person'
        }else if(e.target.value == 6) {
            priceElement.innerText = sumPrice(2000)
             category.innerText = '6 - person'
        }
    }
    clear.onclick = function() {
        if(clear) {
            selectElement.value = 0
            category.innerText = 'N/A'
        }
        priceContainer.style.display = "none"
        addElement.classList.add('price__btn--none')
    }
}

function boraDescription() {
   for(let i = 0; i <boraDescriptionElement.length;i++) {
        boraDescriptionElement[i].onclick = function() {
            for(let j = 0; j<boraDescriptionContent.length;j++) {
                boraDescriptionContent[j].classList.remove('bora__description--content-one--block')
                boraDescriptionContent[i].classList.add('bora__description--content-one--block')
                boraDescriptionBorder[j].classList.remove('bora__border--block')
                boraDescriptionBorder[i].classList.add('bora__border--block')
            }
        }
   }
}

function checkReviewName() {
    inputName.onblur = function(e) {
        if(e.target.value == "") {
            Object.assign(inputName.style,{ 
                border: "1px solid red",
                borderRadius: "20px"
            })
            inputMessage.innerText = "Please enter name!"
           
        } else {
            Object.assign(inputName.style,{ 
                border: "none",
            })
            inputMessage.innerText = ""
        }
    }

    inputName.oninput = function () {
        Object.assign(inputName.style,{ 
            border: "none",
        })
        inputMessage.innerText = ""
    }
}

function checkReviewEmail() {
    inputEmail.onblur = function (e) {
        if(e.target.value == "") {
            Object.assign(inputEmail.style,{ 
                border: "1px solid red",
                borderRadius: "20px"
            })
            inputMessageEmail.innerText = "Please enter Email!"
        } else {
            Object.assign(inputEmail.style,{ 
                border: "none",
            })
            inputMessageEmail.innerText = ""
        }
        
    }
    inputEmail.oninput = function () {
        Object.assign(inputEmail.style,{ 
            border: "none",
        })
        inputMessageEmail.innerText = ""
    }
}

function renderProduct() {
    const products =[
        {
            id: 1,
            image:'image/shop-8-300x300.jpg',
            name:'Maldives',
            price:'$500.00 - $900.00',
            linkAdd:'#',
        },

        {
            id: 2,
            image:'image/shop-2-300x300.jpg',
            name:'Le Seychelles',
            price:'$1,000.00 - $2,000.00',
            linkAdd:'#',
        },

        {
            id: 3,
            image:'image/shop-3-300x300.jpg',
            name:'Polynesia',
            price:'$1,600.00',
            linkAdd:'#',
        },

       
    ]


    const render = products.map(product => {
        return `
        <div class="product__content l-3 m-12 c-12">
            <img style="width:100%;"src="${product.image}" alt="">
            <div class="product__content-name">
                <h5>${product.name}</h5>
                <p>${product.price}</p>
                <div style="text-align: center;">
                    <a style="color:#a3a3a3; padding-top: 10px;" href="${product.linkAdd}">ADD TO CART</a>
                </div>
            </div>
        </div>
        `
    })

    productContainer.innerHTML = render

}
function start() {
    handleSlider()
    autoSlider()
    price()
    boraDescription()
    checkReviewName()
    checkReviewEmail()
    renderProduct()
}

start()