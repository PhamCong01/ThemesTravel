
const productsContainer = document.querySelector('.shop__products')
const products = [
    {
        id: 1,
        link: 'bora.html',
        image: './image/shop-6.jpg',
        name: 'Bora bora',
        price: '$1,000.00 - $2,000.00'
    },

    {
        id: 2,
        link: 'hawaii.html',
        image: './image/shop-7-300x300.jpg',
        name: 'Hawaii Coast',
        price: '$8000.00'
    },

    {
        id: 3,
        link: 'jamaica.html',
        image: './image/shop-5-300x300.jpg',
        name: 'Jamaica',
        price: '$1,000.00 - $2,500.00'
    },

    {
        id: 4,
        link: 'samiu.html',
        image: './image/shop-4-300x300 (1).jpg',
        name: 'Samiu',
        price: '$1,000.00 - $3,500.00'
    },

    {
        id: 5,
        link: 'seychelles.html',
        image: './image/shop-2-300x300 (1).jpg',
        name: 'Le Seychelles',
        price: '$5000.00 - $1,000.00'
    },

    {
        id: 6,
        link: 'maldives.html',
        image: './image/shop-8-300x300 (1).jpg',
        name: 'Maldives',
        price: '$800.00 - $2,500.00'
    },

    {
        id: 7,
        link: 'phukets.html',
        image: './image/shop-4-300x300 (1).jpg',
        name: 'Phuket',
        price: '$8100.00 - $2,500.00'
    },

    {
        id: 8,
        link: 'polynesia.html',
        image: './image/shop-3-300x300 (1).jpg',
        name: 'Polynesia',
        price: '$1,600.00'
    },

    {
        id: 1,
        link: 'bora.html',
        image: './image/shop-6-300x300.jpg',
        name: 'Bora bora',
        price: '$1,000.00 - $2,000.00'
    },
    
]

var productsList = products.map(function (product) {
    return `
        <div class="shop__products--content row l-4 m-6 c-12">
            <a href="${product.link}"><img src="${product.image}" alt="" style="width: 100%; padding: 0px 10px;"></a>
            <div class="products__content">
                <h2 class="products__content--name">${product.name}</h2>
                <div class="product__star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="product__price">${product.price}</p>
                <a href="" style="color:var(--color-header); text-align: center; font-weight: 600;">
                    <p class="products__add--cart">ADD TO CART</p>
                </a>
            </div>
        </div>
    `
})

productsContainer.innerHTML = productsList 