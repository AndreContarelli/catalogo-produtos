import Link from 'next/link';
import { useProdutos } from '../context/ProdutosContext';

export default function Home() {
  const { produtos } = useProdutos();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Produtos</h1>
      <Link href="/novo-produto">
        <button style={{ marginBottom: '1rem' }}>Adicionar Produto</button>
      </Link>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {produtos.map((produto, index) => (
            <li key={index}>
              <strong>{produto.nome}</strong> - R$ {produto.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}