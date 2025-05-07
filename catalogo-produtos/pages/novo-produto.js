import { useState } from 'react';
import { useRouter } from 'next/router';
import { useProdutos } from '../context/ProdutosContext';

export default function NovoProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const { adicionarProduto } = useProdutos();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !preco) return;

    adicionarProduto({ nome, preco: parseFloat(preco) });
    router.push('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Adicionar Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Produto:</label><br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Preço:</label><br />
          <input
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
}