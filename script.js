const goods = [

{title: 'Shirt', price: 150},
{title: 'Socks', price: 50},
{title: 'Jacket', price: 350},
{title: 'Shoes', price: 250,},


];

const renderGoodsItem = (title, price) => {

return `<div class = 'good-item'>

	
<h3 class = 'good-title'>${title}</h3>
<h3 class = 'good-price'>${price}</h3>
<button class='add-to-cart'>Купить</button>


</div>`

}

const renderGoodsList = (list) => {

let goodsList  = list.map(item => renderGoodsItem (item.title, item.price));
document.querySelector('.good-list').innerHTML = goodsList.join('');


}

renderGoodsList(goods);

