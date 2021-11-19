const section = document.getElementById('vitrine');

const aside = document.getElementById('carrinho');

function create(pai, elemento, n) {
    for (let i = 0; i < n; i++) {
        let elemt = document.createElement(elemento);
        elemt.id = `${elemento}-${(i + 1)}`;
        pai.appendChild(elemt);
    }
}

create(aside, 'form', 1);

const form = document.getElementById('form-1');

create(form, 'input', 1);
const input = document.getElementById('input-1');
input.type = 'text';
input.placeholder = 'Digite aqui sua pesquisa';

create(form, 'button', 1);
const button = document.getElementById('button-1');
button.innerHTML = 'Pesquisar';

create(aside, 'section', 1);
const sectionCarrinho = document.getElementById('section-1');

create(sectionCarrinho, 'span', 1);
const spanCarrinho = document.getElementById('span-1');
spanCarrinho.innerHTML = 'Carrinho de compras';

create(sectionCarrinho, 'div', 1);
const divCarrinho = document.getElementById('div-1');

create(divCarrinho, 'h3', 1);
const h3Carrinho = document.getElementById('h3-1');
h3Carrinho.innerHTML = 'Carrinho Vazio';

create(divCarrinho, 'p', 1);
const pCarrinho = document.getElementById('p-1');
pCarrinho.innerHTML = 'Adicione itens';

for (let i = 0; i < 6; i++) {

    const article = document.createElement('article');

    const img = document.createElement('img');
    img.id = 'img' + (i + 1);
    article.appendChild(img);

    const div = document.createElement('div');
    article.appendChild(div);

    const span = document.createElement('span');
    div.appendChild(span);
    span.id = 'span' + (i + 1);
    span.className = 'spanClass';

    const h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.id = 'h3' + (i + 1);

    const p = document.createElement('p');
    div.appendChild(p);
    p.id = 'p' + (i + 1);

    const span2 = document.createElement('span');
    div.appendChild(span2);
    span2.id = 'span2-' + (i + 1);
    span2.className = 'span2Class';

    const button2 = document.createElement('button');
    button2.innerHTML = 'Adicionar ao carrinho';
    button2.className = 'butt';
    div.appendChild(button2);

    section.appendChild(article);
}

document.getElementById('img1').src = '/fifa-22-capa.jpg';
document.getElementById('img2').src = '/farcry.jpg';
document.getElementById('img3').src = '/reddead.jpg';
document.getElementById('img4').src = '/cyberpunk-2077.jpeg';
document.getElementById('img5').src = '/spiderman.jpg';
document.getElementById('img6').src = '/fifa-22-capa.jpg';

span1.innerHTML = 'Jogos PS5';
span2.innerHTML = 'Jogos PS4';
span3.innerHTML = 'Jogos x-box';
span4.innerHTML = 'Jogos x-box';
span5.innerHTML = 'Jogos PS5';
span6.innerHTML = 'Jogos PS4';


h31.innerHTML = 'Fifa 22';
h32.innerHTML = 'Farcry 6';
h33.innerHTML = 'Red dead redemption 2';
h34.innerHTML = 'Cyberpunk 2077';
h35.innerHTML = 'Spider-man Miles Morales';
h36.innerHTML = 'Fifa 22 - P/PS4';

p1.innerHTML = 'Melhor jogo de futebol da história,venha sentir essa emoção do estádio.';
p2.innerHTML = 'Jogo Far Cry 6 Ps4 Prepare-se para acender a fagulha da revolução em Far Cry 6.';
p3.innerHTML = 'O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues.';
p4.innerHTML = 'Cyberpunk 2077 é uma história de ação e aventura em mundo aberto.';
p5.innerHTML = 'sua mais nova aventura no universo de Marvels Spider-Man, adolescente Miles Morales está se ajustando a sua nova casa';
p6.innerHTML = 'Melhor jogo de futebol da história,venha sentir essa emoção do estádio.';

document.getElementById('span2-1').innerHTML = 'R$ 229,00';
document.getElementById('span2-2').innerHTML = 'R$ 159,00';
document.getElementById('span2-3').innerHTML = 'R$ 139,00';
document.getElementById('span2-4').innerHTML = 'R$ 135,00';
document.getElementById('span2-5').innerHTML = 'R$ 265,00';
document.getElementById('span2-6').innerHTML = 'R$ 209,00';


const button2 = document.getElementsByClassName('butt');
console.log(button2);

function pegaJogo(event) {

    const img = event.target.closest('article').firstChild;
    const h3 = event.target.closest('div').childNodes[1].innerHTML;
    const valor = event.target.closest('div').childNodes[3].innerHTML;
    return [img, h3, valor];
}


for (let i = 0; i < button2.length; i++) {
    button2[i].addEventListener('click', adicionaCarrinho);
}


function adicionaCarrinho(event) {
    divCarrinho.id = 'ajustarItens';
    const divXMM = document.createElement('div');
    divXMM.id = 'divXMM';
    const divJogo = document.createElement('div');
    divJogo.id = 'divJogo';
    const imagem = document.createElement('img');
    const h3 = document.createElement('h3');
    const valor = document.createElement('span');

    const card = document.createElement('div');
    card.className = 'itemDaLoja';

    const x = document.createElement('span');
    x.id = 'x';
    x.innerText = 'X';

    const mais = document.createElement('span');
    mais.id = 'mais';
    mais.className = 'mais';
    mais.innerText = '+';

    const quantidadeJogo = document.createElement('span');
    quantidadeJogo.id = 'quantidadeJogo';
    quantidadeJogo.className = 'quantidadeJ';
    quantidadeJogo.innerText = '1';

    const menos = document.createElement('span');
    menos.id = 'menos';
    menos.className = 'menos';
    menos.innerText = '-';

    const [imge, texto, preco] = pegaJogo(event);


    if (podeFuncionar(texto, divCarrinho)) {
        h3Carrinho.classList.add('hidden');
        pCarrinho.classList.add('hidden');
        card.appendChild(divXMM);
        card.appendChild(divJogo);
        divXMM.appendChild(x);
        divXMM.appendChild(mais);
        divXMM.appendChild(quantidadeJogo);
        divXMM.appendChild(menos);
        divJogo.appendChild(imagem);
        divJogo.appendChild(h3);
        divJogo.appendChild(valor);
        divCarrinho.appendChild(card);           
    }      


    imagem.src = imge.src;
    h3.innerText = texto;
    valor.innerText = preco;
    console.log(imge, texto, preco);
    carrinhoAdd(mais, menos, x);

}

function carrinhoAdd(max, min, rem) {
    function adicionar(event) {
        let span = event.target.closest('div').childNodes[2];
        n = Number((span).innerText);
        span.innerText = n + 1;
        console.log(span);
    }
    function diminuirItem(event) {
        let span = event.target.closest('div').childNodes[2];
        n = Number((span).innerText);
        if (n > 1) {
            span.innerText = n - 1;
        } else if (n <= 1) {
            removerItem(event);
        }
    }
    function removerItem(event) {
        let card = event.target.closest('div').parentNode;
        card.remove();
        console.log(divCarrinho.childNodes.length);
        if (divCarrinho.childNodes.length <= 2) {            
            pCarrinho.classList = 'pCar';
            h3Carrinho.classList = 'h3Car';
        }
    }
    max.addEventListener('click', adicionar);
    min.addEventListener('click', diminuirItem);
    rem.addEventListener('click', removerItem);
}


function podeFuncionar(texto, divCarrinho) {
    let resposta = true;
    let arr = [];
    if (divCarrinho.childNodes.length > 2) {
        const filhosDiv = divCarrinho.childNodes;
        for (let i = 2; i < filhosDiv.length; i++) {
            arr.push(filhosDiv[i].lastChild.childNodes[1].innerText);                       
        }           
        if (arr.includes(texto)) {
            resposta = false;
            let itemRepetido;
            for (let i = 2; i < filhosDiv.length; i++){
                if(filhosDiv[i].lastChild.childNodes[1].innerText === texto){
                    itemRepetido = filhosDiv[i].firstChild.childNodes[2];
                    let valor = Number(itemRepetido.innerText);
                    itemRepetido.innerText = valor + 1 ; 
                }
            }
        }            
    }
    return resposta;
}