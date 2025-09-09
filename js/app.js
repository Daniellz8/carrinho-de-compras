let valorTotal;
limpar();

function adicionar () {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('$')[1];

    let valorSubTotal = valorUnitario * quantidade;

    let produtosCarrinho = document.getElementById('lista-produtos');
    produtosCarrinho.innerHTML = produtosCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span></section>`;

    valorTotal = valorTotal + valorSubTotal;

    let imprimirTotal = document.getElementById('valor-total');
    imprimirTotal.textContent = `R$${valorTotal}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    valorTotal = 0;
    produtosCarrinho = document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$0`;
}