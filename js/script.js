let total = 0;
let carrinhoVisivel = false;
let quantidadeItens = 0;
 
function atualizarContador() {
    const contador = document.getElementById('contador-carrinho');
    contador.textContent = quantidadeItens;
}
 
function adicionarAoCarrinho(produto, preco) {
    const lista = document.getElementById('lista-carrinho');
    const item = document.createElement('li');
    item.textContent = `${produto} - R$ ${preco},00`;
    lista.appendChild(item);
 
    total += preco;
    quantidadeItens++;
    atualizarContador();
 
    document.getElementById('total').textContent = total;
}
 
function limparCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';
    total = 0;
    quantidadeItens = 0;
    atualizarContador();
 
    document.getElementById('total').textContent = total;
 
    esconderCarrinho();
}
 
function finalizarCompra() {
    if (total === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
 
    alert(`Compra finalizada com sucesso!\nTotal pago: R$ ${total},00`);
    limparCarrinho();
}
 
function mostrarCarrinho() {
    document.getElementById('carrinho').style.display = 'block';
    carrinhoVisivel = true;
}
 
function esconderCarrinho() {
    document.getElementById('carrinho').style.display = 'none';
    carrinhoVisivel = false;
}
 
window.onload = function() {
    document.getElementById('limpar-btn').addEventListener('click', limparCarrinho);
    document.getElementById('finalizar-btn').addEventListener('click', finalizarCompra);
 
    document.getElementById('logo-carrinho').addEventListener('click', function() {
        if (quantidadeItens === 0) {
            alert('O carrinho está vazio!');
            return;
        }
 
        if (carrinhoVisivel) {
            esconderCarrinho();
        } else {
            mostrarCarrinho();
        }
    });
};