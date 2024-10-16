import { contentDiv } from ".";
import pizzaImage2 from "./img/pizza2.jpg";

function menuDiv() {
    const pizzaMenuList = [
        'Pizza Napoletana',
        'R$ 39,90',
        'Pizza Marguerita',
        'R$ 35,90',
        'Pizza Calabria',
        'R$ 29,90',
        'Pizza Quattro Formaggi',
        'R$ 49,90'
    ]

    const divMenu = document.createElement('div');
    divMenu.classList.add('menu')
    const imgPizza2 = document.createElement('img');
    imgPizza2.src = pizzaImage2;
    const menuList = document.createElement('ul');
    
    for (let i = 0; i < pizzaMenuList.length; i+=2) {
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        
        p1.textContent = pizzaMenuList[i];
        p2.textContent = pizzaMenuList[i+1];

        li.appendChild(p1);
        li.appendChild(p2);
        menuList.appendChild(li);
    };
    
    divMenu.appendChild(imgPizza2);
    divMenu.appendChild(menuList);
    contentDiv.appendChild(divMenu);
}

export { menuDiv }