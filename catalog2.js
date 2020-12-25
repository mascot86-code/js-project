const formatNumber = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

let catalog = {

    product: [
        {id: 1, good_name: 'Куртка бомбер', price: 5000, quantity: 1, status: "Нет на складе", img: 'img/jack.jpg'},
        {id: 2, good_name: 'Сапоги резиновые', price: 3000,quantity: 1, status: "В пути в магазин", img: 'img/boots.jpg'},
        {id: 3, good_name: 'Брюки джоггеры', price: 2000, quantity: 1, status: "Есть в наличии", img: 'img/trousers.jpg'},
    ],

    renderCatalog() {
        let out = '';
        for (let key in catalog.product) {
            out +='<img src="' + catalog.product[key].img+'">' +'<br>';
            out += 'Артикул товара: ' + catalog.product[key].id + '<br>';
            out += 'Название товара: ' + catalog.product[key].good_name + '<br>';
            out += 'Наличие на складе: ' + catalog.product[key].status + '<br>';
            out += '<h3>'+ formatNumber('Цена: ' + catalog.product[key].price + ' руб.'+ '<br>') + '</h3>';
            out += '<button class = "add" data-id = "'+ catalog.product[key].id +'" data-price = "'+ catalog.product[key].price +'"> Добавить в корзину </button>';
            out += '<hr>'
        };
        
        return document.getElementById('catalog').innerHTML = out;
    }
};
    
catalog.renderCatalog();
  
let cart = {
    goods: [],
    
    getPrice() {
        return this.goods.reduce ((total, product) => total + product.price * product.quantity, 0);
    },
    
    getCount() {
        return this.goods.length;
    },
    
    renderBusket() {
        let cartText;
        if(document.querySelector('p')) {
            cartText = document.querySelector('p');
        } else {
            cartText = document.createElement('p');
        }
        if (this.goods.length > 0) {
            cartText.innerHTML = 'В корзине: ' + '<b>' + this.getCount() + '</b>' + ' товара(ов)' + ' на сумму ' +  '<b>'  + formatNumber(this.getPrice()) + '</b>' +' рублей(ля)';
        } else {
            cartText.innerHTML = 'Увы, Ваша корзина пуста...';
        }
        return document.querySelector('#busket-container').appendChild(cartText);
    },
    
    init() {
        this.cartButton = document.querySelector('.btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        document.querySelector('#catalog').addEventListener('click', (event) => {
            this.conteinerClickHandler(event);
        });
},
    
    conteinerClickHandler(event) {
        if (event.target.tagName !== 'BUTTON') return;    
        let id = event.target.dataset.id;
        let price = event.target.dataset.price;
        this.addGoodsToBasket(id,price);
    },
    
    addGoodsToBasket(id,price) {
    this.goods.push ({'id' : id, 'price' : price, 'quantity': 1});
    this.renderBusket();
    },

    clearCart() {
        this.goods = [];
        this.renderBusket();
    },
    
};

cart.renderBusket();
cart.init()