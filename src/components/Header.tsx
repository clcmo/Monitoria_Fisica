import { Secao } from '../App';

interface HeaderProps {
  secaoAtiva: Secao;
  setSecaoAtiva: (s: Secao) => void;
}

const ABAS: { id: Secao; label: string }[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'horarios', label: 'Horários' },
  { id: 'aulas', label: 'Aulas' },
  { id: 'duvidas', label: 'Tirar Dúvidas' },
  { id: 'contato', label: 'Contato' },
];

export default function Header({ secaoAtiva, setSecaoAtiva }: HeaderProps) {
  return (
    <header className="hero is-dark is-large">
      <div className="hero-body py-4">
        <div className="container">
          <p className="title is-3 has-text-white">
            Plataforma de Monitoria — Exatas
          </p>
        </div>
      </div>
      <div className="container">
        <div className="tabs is-boxed is-centered mb-0">
          <ul>
            {ABAS.map((aba) => (
              <li key={aba.id} className={secaoAtiva === aba.id ? 'is-active' : ''}>
                <a onClick={() => setSecaoAtiva(aba.id)}>{aba.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}