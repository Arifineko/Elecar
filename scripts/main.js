import { brands } from "../data/brand.js";
import { featured } from "../data/featured.js";
import { formatCurrency } from "./utils/money.js";


const menuToggle = document.querySelector(".js-toggle")
const menuElement = document.querySelector('.display-menu');
const closeElement = document.querySelector('.close');

// menuToggle.addEventListener('click', () => {
//     menuElement.classList.toggle('menu-active')
// })

// closeElement.addEventListener('click', () => {
//     menuElement.classList.toggle('menu-active')
// })

menuToggle.addEventListener('click', () => {
    menuElement.classList.add('menu-active');
});

closeElement.addEventListener('click', () => {
    menuElement.classList.remove('menu-active');
});


let brandHTML = '';

brands.forEach((brand) => {
    brandHTML += `
    <div class="popular-brand">
        <div class="brand-shape">
            <img src="assets/shape.svg" alt="">
        </div>
        <div class="popular-content">
            <div class="popular-title">${brand.name}</div>
            <div class="grey-color">${brand.type}</div>
            <div class="brand-image">
                ${brand.image}
            </div>
            <div class="popular-specification">
                <div class="container-icon">
                    <img src="assets/icon-popular1.svg" alt="">
                    <p>${brand.specification.spedometer}</p>
                </div>
                <div class="container-icon">
                    <img src="assets/icon-popular2.svg" alt="">
                    <p>${brand.specification.speed}</p>
                </div>
                <div class="container-icon">
                    <img src="assets/icon-popular3.svg" alt="">
                    <p>${brand.specification.fuel}</p>
                </div>
            </div>
            <div class="brand-price">$${formatCurrency(brand.priceCents)} </div>
            <div class="popular-button">
                <button>
                    <img src="assets/button-icon.svg" alt="">
                </button>
            </div>
        </div>
    </div>
    `
});

document.querySelector('.js-brand-container')
    .innerHTML = brandHTML;



let featuredHTML = '';

featured.forEach((feature) => {

    featuredHTML += `
        <div class="popular-brand">
            <div class="brand-shape">
                <img src="assets/shape.svg" alt="">
            </div>
            <div class="popular-content">
                <div class="popular-title">${feature.name}</div>
                <div class="grey-color gap-image">${feature.type}</div>
                <div>
                    ${feature.image}
                </div>
                <div class="brand-price">$${formatCurrency(feature.priceCents)}</div>
                <div class="popular-button">
                    <button>
                        <img src="assets/button-icon.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    `


})


document.querySelector('.js-grid-car').innerHTML = featuredHTML;




