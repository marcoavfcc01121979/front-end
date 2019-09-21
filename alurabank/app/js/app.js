const controler = new NegociacaoControle();
document
    .querySelector('.form')
    .addEventListener('submit', controler.adiciona.bind(controler));
