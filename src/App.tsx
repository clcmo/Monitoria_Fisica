import { useState } from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Horarios from './components/Horarios';
import Aulas from './components/Aulas';
import Duvidas from './components/Duvidas';
import Contato from './components/Contato';
import Footer from './components/Footer';

export type Secao = 'sobre' | 'horarios' | 'aulas' | 'duvidas' | 'contato';

export default function App() {
  const [secaoAtiva, setSecaoAtiva] = useState<Secao>('sobre');

  return (
    <div className="has-background-light" style={{ minHeight: '100vh' }}>
      <Header secaoAtiva={secaoAtiva} setSecaoAtiva={setSecaoAtiva} />

      <main className="container my-5 px-3">
        {secaoAtiva === 'sobre' && <Sobre />}
        {secaoAtiva === 'horarios' && <Horarios />}
        {secaoAtiva === 'aulas' && <Aulas />}
        {secaoAtiva === 'duvidas' && <Duvidas />}
        {secaoAtiva === 'contato' && <Contato />}
      </main>

      <Footer />
    </div>
  );
}