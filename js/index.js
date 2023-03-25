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
let currentThumbnail = document.querySelector('.merchandise-media .thumbnails .current-thumbnail');
let currentImage = document.querySelector('.merchandise-media #current-image');
const thumbnails = document.querySelectorAll('.merchandise-media .thumbnails #thumbnail');

thumbnails.forEach( thumbnail => {
    thumbnail.addEventListener('click', () => {
        currentThumbnail.classList.toggle('current-thumbnail');
        currentThumbnail = thumbnail;
        currentImage.src = thumbnail.childNodes[0].src.substring(thumbnail.childNodes[0].src.indexOf("images/"));
        thumbnail.classList.toggle('current-thumbnail');
    })
});

currentImage.addEventListener('click', () => {
    document.querySelector('.merchandise-media-hover').classList.toggle('close');
});

// Update Current Image and Thumbnail on Hover
let currentThumbnailHover = document.querySelector('.merchandise-media-hover .thumbnails .current-thumbnail');
let currentImageHover = document.querySelector('.merchandise-media-hover #current-image');
const thumbnailsHover = document.querySelectorAll('.merchandise-media-hover .thumbnails #thumbnail');

let prevIcon = document.querySelector('#prev');
let nextIcon = document.querySelector('#next');

let closeIconHover = document.querySelector('#close-hover');

thumbnailsHover.forEach( thumbnail => {
    thumbnail.addEventListener('click', () => {
        currentThumbnailHover.classList.toggle('current-thumbnail');
        currentThumbnailHover = thumbnail;
        currentImageHover.src = thumbnail.childNodes[0].src.substring(thumbnail.childNodes[0].src.indexOf("images/"));
        thumbnail.classList.toggle('current-thumbnail');
    })
});

currentImageHover.addEventListener('click', () => {
   if (window.innerWidth > 1000)
        document.querySelector('.merchandise-media-hover').classList.toggle('close');
});

prevIcon.addEventListener('click', () => {    
    let childIndex = Array.from(currentThumbnailHover.parentNode.children).indexOf(currentThumbnailHover)-1;
    if (childIndex >= 0) {
        currentThumbnailHover.classList.toggle('current-thumbnail');
        currentThumbnailHover = currentThumbnailHover.parentNode.children[childIndex];
        currentThumbnailHover.parentNode.children[childIndex].classList.toggle('current-thumbnail');
        currentImageHover.src = currentThumbnailHover.parentNode.children[childIndex].childNodes[0].src.substring(
            currentThumbnailHover.parentNode.children[childIndex].childNodes[0].src.indexOf("images/")
        );
    }
});

nextIcon.addEventListener('click', () => {
    let childIndex = Array.from(currentThumbnailHover.parentNode.children).indexOf(currentThumbnailHover)+1;
    if (childIndex < currentThumbnail.parentNode.children.length) {
        currentThumbnailHover.classList.toggle('current-thumbnail');
        currentThumbnailHover = currentThumbnailHover.parentNode.children[childIndex];
        currentThumbnailHover.parentNode.children[childIndex].classList.toggle('current-thumbnail');
        currentImageHover.src = currentThumbnailHover.parentNode.children[childIndex].childNodes[0].src.substring(
            currentThumbnailHover.parentNode.children[childIndex].childNodes[0].src.indexOf("images/")
        );
    }
});

document.querySelector('.hover-close-bg').addEventListener('click', () => {
    document.querySelector('.merchandise-media-hover').classList.toggle('close');
});

closeIconHover.addEventListener('click', () => {
    document.querySelector('.merchandise-media-hover').classList.toggle('close');
});

// Cart Updates
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
        cartItemCount -= 1;
        document.querySelector('#cart-count').innerHTML = cartItemCount;

        if (cartItemCount == 0) {
            document.querySelector('.line').classList.toggle('close', true);
            document.querySelector('#empty').classList.toggle('close', false);
            document.querySelector('#checkout').classList.toggle('close', true);
            document.querySelector('#cart-count').classList.toggle('close', true);
        }
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
        let priceStr = price.innerHTML.substring(1, 6);
        document.querySelector('.cart-items').appendChild(createCartItem(priceStr, amountElement.innerHTML));

        if (cartItemCount == 0) {
            document.querySelector('.line').classList.toggle('close', false);
            document.querySelector('#empty').classList.toggle('close', true);
            document.querySelector('#checkout').classList.toggle('close', false);
            document.querySelector('#cart-count').classList.toggle('close', false);
        }

        amountElement.innerHTML = 0;
        cartItemCount += 1;
        document.querySelector('#cart-count').innerHTML = cartItemCount;
    }
});