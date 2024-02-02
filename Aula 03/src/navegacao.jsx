function Navegacao(props) {
  return (
    <div className="navegacao">
      <input
        name="paginas-cardapio"
        type="radio"
        id="opcao-0"
        defaultChecked
        onClick={() => props.alterarPaginaSelecionada(0)}
      />
      <label htmlFor="opcao-0">Pratos Principais</label>
      <input
        name="paginas-cardapio"
        type="radio"
        id="opcao-1"
        onClick={() => props.alterarPaginaSelecionada(1)}
      />
      <label htmlFor="opcao-1">Sobremesas</label>
      <input
        name="paginas-cardapio"
        type="radio"
        id="opcao-2"
        onClick={() => props.alterarPaginaSelecionada(2)}
      />
      <label htmlFor="opcao-2">Bebidas</label>
    </div>
  );
}

export default Navegacao;
