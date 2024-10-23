function criarProduto()
{
    const inputNome = document.getElementById("inputNome");
    const inputFabricante = document.getElementById("inputFabricante");
    const inputPrecoCompra = document.getElementById("inputPrecoCompra");
    const inputPrecoVenda = document.getElementById("inputPrecoVenda");

    const produto = {
        Nome:inputNome.value,
        Fabricante:inputFabricante.value,
        PrecoCompra:parseFloat(inputPrecoCompra.value),
        PrecoVenda:parseFloat(inputPrecoVenda.value)};

    const stringProduto = `${produto.Nome}(${produto.Fabricante}) [R$${produto.PrecoCompra.toFixed(2)}][R$${produto.PrecoVenda.toFixed(2)}]`;

    const tagProduto = document.createElement("p");
    tagProduto.textContent = stringProduto;

    const divListagem = document.getElementById("listDiv");
    divListagem.appendChild(tagProduto);
}
