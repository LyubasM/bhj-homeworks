const inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const dec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const goodsList = document.querySelector('.products');
const goods = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

// const changeQuantity = function(e) {
//     let quantityOfItem = e.target.closest('div.product').querySelector('.product__quantity-value');
//     let number = parseInt(quantityOfItem.innerText);
//     if (inc.includes(e.target)) {
//         quantityOfItem.innerText =  number + 1;
//     }
//     if (dec.includes(e.target) && number > 1) {
//         quantityOfItem.innerText = number - 1;
//     }
// }

const quantityInc = function(e) {
    let quantityOfItem = e.target.closest('div.product').querySelector('.product__quantity-value');
    let number = parseInt(quantityOfItem.innerText);
    quantityOfItem.innerText =  number + 1;
}

const quantityDec = function(e) {
    let quantityOfItem = e.target.closest('div.product').querySelector('.product__quantity-value');
    let number = parseInt(quantityOfItem.innerText);
    if (number > 1) {
        quantityOfItem.innerText =  number - 1;
    }
}

const addToCart = function(e) {
    let product = e.target.closest('.product');
    let cartList = Array.from(cart.querySelectorAll('.cart__product'));
    let targetItem = cartList.find((i) => i.dataset.id === product.dataset.id);
    if (targetItem) {
        targetItem.querySelector('.cart__product-count').innerText = parseInt(targetItem.querySelector('.cart__product-count').innerText) + parseInt(product.querySelector('.product__quantity-value').innerText);
    } else {
        let newItem = document.createElement('div');
        let newItemQuantity = document.createElement('div');
        newItem.classList.add('cart__product');
        newItemQuantity.classList.add('cart__product-count');
        newItemQuantity.innerText = product.querySelector('.product__quantity-value').innerText;
        newItem.dataset.id = product.dataset.id;
        newItemImage = product.querySelector('.product__image').cloneNode(true);
        newItemImage.className = 'cart__product-image';
        newItem.appendChild(newItemImage);
        newItem.appendChild(newItemQuantity);
        cart.appendChild(newItem);
    }
}

//goodsList.addEventListener('click', changeQuantity);

inc.forEach(i => i.addEventListener('click', quantityInc));
dec.forEach(i => i.addEventListener('click', quantityDec));
goods.forEach(i => i.addEventListener('click', addToCart));

