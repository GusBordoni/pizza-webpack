import { contentDiv } from ".";
import pizzaImage1 from "./img/pizza1.jpg";

function homeDiv() {
    const divHome = document.createElement('div');
    divHome.classList.add('home')
    const h1Title = document.createElement('h1');
    h1Title.innerHTML = 'Pizzarea 01';
    const imgPizza1 = document.createElement('img');
    imgPizza1.src = pizzaImage1;
    const p1 = document.createElement('p');
    p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At Pizzeria Bella Vita, we believe that every meal is a celebration of life, family, and the finest ingredients. Suspendisse potenti. Our chefs craft each pizza with love, using only handpicked ingredients like San Marzano tomatoes and fresh mozzarella. Nulla facilisi. From our signature wood-fired pizzas to our artisanal pasta dishes, each bite transports you to the heart of Italy. Fusce efficitur metus vel leo gravida facilisis.';
    const p2 = document.createElement('p');
    p2.innerHTML = 'In hac habitasse platea dictumst, we invite you to join us for a culinary journey where tradition meets elegance. Buon Appetito!';
    divHome.appendChild(h1Title);
    divHome.appendChild(imgPizza1);
    divHome.appendChild(p1);
    divHome.appendChild(p2);
    contentDiv.appendChild(divHome);
}

export { homeDiv }