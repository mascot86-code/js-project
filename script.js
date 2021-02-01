

//Классы. Урок № 2 Курса продввинутый JavaScript

class GoodsItem {

    constructor(title, price) {

        this.title = title;
        this.price = price;


    }

    render() {

        return `<div class="good-item">
               

                    <h3 class = 'good-title'>${this.title}</h3>
                    <h3 class = 'good-price'>${this.price}</p>
                  
              
                <button class='add-to-cart'>Добавить</button>
              </div>`;
    }


}

class GoodsList {

constructor() {

    this.goods = [];

}

fetchGoods() {


    this.goods = [

        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },

    ];

}

render () {

    let listHtml = '';
    this.goods.forEach(good => {
    const goodItem = new GoodsItem(good.title, good.price);
    listHtml += goodItem.render();

});

document.querySelector('.good-list').innerHTML = listHtml;

}

calcTotalPrice() {

const amount = this.goods.reduce((total,good) => {
  return total+=good.price  
}, 0);

let totalGoods = "Всего товаров в корзине на сумму: $" + amount;
document.querySelector('.goods-total').innerHTML = totalGoods;

}

}

class BasketItem {

    constructor (title, desc, price) {

            this.title = title;
            this.desc = desc;
            this.price = price;

    }

    renderBusketItem() {


    }

}

class Busket {

    constructor () {

        this.addGoods = [];
        this.deleteGoods = [];

    }

    // Метод добавления товара
    addToBusket() {


    }

    // Метод удаления товара из корзины
    deleteFromBusket() {


    }

    // Метод подсчета товаров в корзине
    calcBusket() {


    }

}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.calcTotalPrice();