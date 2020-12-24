const formatNumber = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  
  
const cart = {

goods: [

{goods_name: 'Банан', price: 23, count: 12},
{goods_name: 'Апельсин', price: 24, count: 4},
{goods_name: 'Манго', price: 12, count: 145},


],

getPrice() {

return this.goods.reduce ((total, product) => total+product.price*product.count, 0);

},

getCount() {


return this.goods.length;

},

init() {

    this.cartButton = document.querySelector('.btn');
    this.cartButton.addEventListener('click', this.clearCart.bind(this));
    this.render();
    
},

render() {

let cartText = document.createElement('h4');

cartText.style.fontWeight = 600;


if (this.goods.length > 0) {

    cartText.innerHTML = 'В корзине: ' + this.getCount() + '<i>'+ ' товара(ов)' + '</i>' + ' на сумму ' + formatNumber(this.getPrice()) + '<i>' +' рублей(ля)'+'</i>';

} else {
    
    cartText.innerHTML = 'Корзина пуста';

}

return document.querySelector('.cart').append(cartText);

},

clearCart() {
    
    this.goods = [];
    this.render();
},

};

cart.init();


