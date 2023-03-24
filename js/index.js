const hamburgerIcon = document.querySelector('#hamburger');
const navContainer = document.querySelector('.nav-list');

const closeIcon = document.querySelector('#close');
const closeBg = document.querySelector('.nav-close-bg');

const cartIcon = document.querySelector('#cart');
const cartContainer = document.querySelector('.cart');

hamburgerIcon.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    closeBg.classList.toggle('close');
});

closeIcon.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    document.querySelector('.nav-close-bg').classList.toggle('close');
});

closeBg.addEventListener('click', () => {
    navContainer.classList.toggle('close');
    document.querySelector('.nav-close-bg').classList.toggle('close');
});

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('close');
});

// Update Current Image and Thumbnail
let currentThumbnail = document.querySelector('.current-thumbnail');
let currentImage = document.querySelector('#current-image');
const thumbnails = document.querySelectorAll('#thumbnail');

thumbnails.forEach( thumbnail => {
    thumbnail.addEventListener('click', () => {
        currentThumbnail.classList.toggle('current-thumbnail');
        currentThumbnail = thumbnail;
        currentImage.src = thumbnail.childNodes[0].src.substring(thumbnail.childNodes[0].src.indexOf("images/"));
        thumbnail.classList.toggle('current-thumbnail');
    })
});


let cartItemCount = 0;

let minusIcon = document.querySelector('#minus');
let plusIcon = document.querySelector('#plus');
let addToCartButton = document.querySelector('#add');
let amountElement = document.querySelector('#amount');
let price = document.querySelector('#price');

const createCartItem = (price, count) => {
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    let productThumbnail = document.createElement('img');
    productThumbnail.src = 'images/image-product-1-thumbnail.jpg';
    productThumbnail.alt = 'Item Thumbnail';

    let productCartInfo = document.createElement('div');

    let productName = document.createElement('p');
    productName.innerHTML = 'Fall Limited Edition Sneakers';

    let pricingInfo = document.createElement('p');
    pricingInfo.innerHTML = `$${price} x ${count} <span id="total">$${parseFloat(price)*parseFloat(count)}.00</span>`

    
    let deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/icon-delete.svg';
    deleteIcon.alt = "Delete Icon";
    deleteIcon.classList.add('icon');
    deleteIcon.id = 'delete';

    deleteIcon.addEventListener('click', () => {
        document.querySelector('.cart-items').removeChild(cartItem);
    });

    productCartInfo.appendChild(productName);
    productCartInfo.appendChild(pricingInfo);

    cartItem.appendChild(productThumbnail);
    cartItem.appendChild(productCartInfo);
    cartItem.appendChild(deleteIcon);

    return cartItem;
}

minusIcon.addEventListener('click', () => {
    amountElement.innerHTML = amountElement.innerHTML == 0 ? 0 : amountElement.innerHTML-1;
});

plusIcon.addEventListener('click', () => {
    amountElement.innerHTML = parseInt(amountElement.innerHTML)+1
});

addToCartButton.addEventListener('click', () => {
    if (amountElement.innerHTML != 0) {
        document.querySelector('.cart-items').appendChild(createCartItem(price.innerHTML, amountElement.innerHTML));

        amountElement.innerHTML = 0;
    }
});