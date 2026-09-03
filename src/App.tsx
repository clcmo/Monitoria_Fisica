import React, { useState } from 'react';
import { MONITORES } from './data/monitores';

export default function App() {
  const [secaoAtiva, setSecaoAtiva] = useState<'sobre' | 'horarios' | 'duvidas' | 'contato'>('sobre');

  // Estado do Formulário de Dúvidas
  const [duvida, setDuvida] = useState({
    disciplina: 'Física',
    nomeAluno: '',
    emailAluno: '',
    serie: '1_EM',
    duvidaTexto: '',
  });

  const [sucesso, setSucesso] = useState(false);

  const handleSubmitDuvida = (e: React.FormEvent) => {
    e.preventDefault();
    setSucesso(true);
    setTimeout(() => setSucesso(false), 5000);
    setDuvida({
      disciplina: 'Física',
      nomeAluno: '',
      emailAluno: '',
      serie: '1_EM',
      duvidaTexto: '',
    });
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#333', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* CABEÇALHO E NAVEGAÇÃO */}
      <header style={{ backgroundColor: '#1e293b', color: '#fff', padding: '1rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Plataforma de Monitoria — Exatas & Exatas BNCC</h1>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            {(['sobre', 'horarios', 'duvidas', 'contato'] as const).map((aba) => (
              <button
                key={aba}
                onClick={() => setSecaoAtiva(aba)}
                style={{
                  background: secaoAtiva === aba ? '#3b82f6' : 'transparent',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                }}
              >
                {aba === 'duvidas' ? 'Tirar Dúvidas' : aba}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1rem' }}>
        
        {/* MÓDULO SOBRE */}
        {secaoAtiva === 'sobre' && (
          <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#1e293b', marginTop: 0 }}>Sobre o Projeto de Monitoria</h2>
            <p style={{ lineHeight: '1.6' }}>
              O projeto de monitoria visa oferecer suporte contínuo para os estudantes no aprendizado das disciplinas de 
              <strong> Ciências da Natureza e Matemática</strong> no Ensino Médio, alinhado aos pressupostos da <strong>BNCC (Base Nacional Comum Curricular)</strong>.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Através de atendimento síncrono (presencial e online) e plantão de dúvidas, buscamos desenvolver a autonomia dos alunos,
              o raciocínio crítico-científico e a resolução de problemas práticos do cotidiano.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #3b82f6' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#1d4ed8' }}>Aprendizagem Ativa</h3>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Apoio focado no desenvolvimento do protagonismo do estudante na resolução de problemas.</p>
              </div>
              <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '6px', borderLeft: '4px solid #22c55e' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#15803d' }}>Integração BNCC</h3>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Foco nas competências específicas de investigação científica e modelagem matemática.</p>
              </div>
            </div>
          </section>
        )}

        {/* MÓDULO HORÁRIOS */}
        {secaoAtiva === 'horarios' && (
          <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#1e293b', marginTop: 0 }}>Horários de Atendimento</h2>
            <p>Confira a disponibilidade para atendimentos presenciais e plantões digitais:</p>
            <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '0.75rem' }}>Disciplina</th>
                    <th style={{ padding: '0.75rem' }}>Área BNCC</th>
                    <th style={{ padding: '0.75rem' }}>Atendimento / Horário</th>
                    <th style={{ padding: '0.75rem' }}>Local</th>
                  </tr>
                </thead>
                <tbody>
                  {MONITORES.map((m) => (
                    <tr key={m.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{m.materia}</td>
                      <td style={{ padding: '0.75rem', color: '#64748b', fontSize: '0.9rem' }}>{m.areaBNCC}</td>
                      <td style={{ padding: '0.75rem' }}>{m.horario}</td>
                      <td style={{ padding: '0.75rem' }}>{m.local}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* MÓDULO FORMULÁRIO DE DÚVIDAS (BNCC) */}
        {secaoAtiva === 'duvidas' && (
          <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#1e293b', marginTop: 0 }}>Envio de Dúvidas por Componente (BNCC)</h2>
            <p>Escolha a disciplina e envie sua dúvida sobre exercícios, relatórios ou conceitos das aulas.</p>

            {sucesso && (
              <div style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
                ✓ Sua dúvida foi enviada com sucesso! O monitor responsável entrará em contato.
              </div>
            )}

            <form onSubmit={handleSubmitDuvida} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Componente Curricular:</label>
                <select
                  value={duvida.disciplina}
                  onChange={(e) => setDuvida({ ...duvida, disciplina: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                >
                  <option value="Física">Física (Ciências da Natureza)</option>
                  <option value="Química">Química (Ciências da Natureza)</option>
                  <option value="Biologia">Biologia (Ciências da Natureza)</option>
                  <option value="Matemática">Matemática e suas Tecnologias</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Seu Nome Completo:</label>
                  <input
                    type="text"
                    required
                    value={duvida.nomeAluno}
                    onChange={(e) => setDuvida({ ...duvida, nomeAluno: e.target.value })}
                    placeholder="Ex: Maria Silva"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>E-mail ou Contato:</label>
                  <input
                    type="email"
                    required
                    value={duvida.emailAluno}
                    onChange={(e) => setDuvida({ ...duvida, emailAluno: e.target.value })}
                    placeholder="seu.email@escola.sp.gov.br"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Série / Ano:</label>
                  <select
                    value={duvida.serie}
                    onChange={(e) => setDuvida({ ...duvida, serie: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                  >
                    <option value="1_EM">1º Ano — Ensino Médio</option>
                    <option value="2_EM">2º Ano — Ensino Médio</option>
                    <option value="3_EM">3º Ano — Ensino Médio</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Descrição da Dúvida / Exercício:</label>
                <textarea
                  rows={5}
                  required
                  value={duvida.duvidaTexto}
                  onChange={(e) => setDuvida({ ...duvida, duvidaTexto: e.target.value })}
                  placeholder="Descreva a dúvida com o máximo de detalhes possível..."
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: '#2563eb',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  justifySelf: 'start',
                }}
              >
                Enviar Dúvida
              </button>
            </form>
          </section>
        )}

        {/* MÓDULO CONTATO */}
        {secaoAtiva === 'contato' && (
          <section style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#1e293b', marginTop: 0 }}>Canais de Contato</h2>
            <p>Entre em contato com a coordenação do projeto ou diretamente com a equipe pedagógica.</p>
            <ul style={{ lineHeight: '2', paddingLeft: '1.2rem' }}>
              <td><strong>E-mail Institucional:</strong> monitoriaetecbraz@gmail.com</td><br/>
              <td><strong>Atendimento Presencial:</strong> A anunciar</td><br/>
              <td><strong>Repositório do Projeto:</strong> <a href="https://github.com/clcmo/Monitoria_Fisica" target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>github.com/clcmo/Monitoria_Fisica</a></td>
            </ul>
          </section>
        )}
      </main>

      {/* RODAPÉ */}
      <footer style={{ textAlign: 'center', padding: '1.5rem', borderTop: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.9rem', marginTop: '3rem' }}>
        <p>Projeto de Monitoria de Física e Exatas — Ensino Médio (BNCC) &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}