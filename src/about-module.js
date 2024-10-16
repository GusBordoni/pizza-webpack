import { contentDiv } from ".";
import fornoImage from "./img/bg-forno.jpg";

function aboutDiv() {
    const divAbout = document.createElement('div');
    divAbout.classList.add('about');
    const imgForno = document.createElement('img');
    imgForno.src = fornoImage;
    const pEndTitle = document.createElement('p');
    pEndTitle.innerText = 'Endereço:';
    const pEnd = document.createElement('p');
    pEnd.innerHTML = `<p>
    Via dei Sapori, 123<br>
    Quartiere Gourmet<br>
    Città Bella, 56789<br>
    Italia<br>
    </p>`;

    divAbout.appendChild(imgForno);
    divAbout.appendChild(pEndTitle);
    divAbout.appendChild(pEnd);
    contentDiv.appendChild(divAbout);
}

export { aboutDiv }