'use strict';
class CartList{
    constructor(container='.cart'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }

    /*
    Метод формирует массив с товарами
    */
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
        this.showTotalPrice();
    }
    /*
    Метод расчитывает полную стоимость товаров в корзине
    */
    showTotalPrice() {

    }

    /*
    Метод будет отрисовывать товар в корзине
    */
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new CartItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}

class CartItem {
    constructor(product){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.quantity();
        this.sumPerProduct();
    }

    /*
    Метод будет увеличивать количество товара в корзине или перенаправлять в метод render, если товар в корзине отсутствует
    */

    quantity() {

    }

    /*
    Метод будет считать сумму за одно наименование товара (количество товара * цену товара)
    */

    sumPerProduct(){
    return this.price * this.quantity;
    };

    /*
    Метод будет отрисовывать товар в корзине
    */

    render(){
        return `<div class="cart-item">
                <h3>${this.title}</h3>
                <p>${this.quantity}</p>
                <p>${this.price}</p>
                <p>${this.sumPerProduct}</p>
                <button class="add-btn">+</button>
                <button class="decrease-btn">-</button>
            </div>`
    }
}

let list = new CartList();


