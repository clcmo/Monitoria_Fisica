export default function Sobre() {
  return (
    <section className="box">
      <h2 className="title is-4">Sobre o Projeto de Monitoria</h2>
      <div className="content">
        <p>
          O projeto de monitoria visa oferecer suporte contínuo para os estudantes no
          aprendizado das disciplinas de <strong>Ciências da Natureza e Matemática</strong> no
          Ensino Médio, alinhado aos pressupostos da{' '}
          <strong>BNCC (Base Nacional Comum Curricular)</strong>.
        </p>
        <p>
          Através de atendimento síncrono (presencial e online) e plantão de dúvidas,
          buscamos desenvolver a autonomia dos alunos, o raciocínio crítico-científico e a
          resolução de problemas práticos do cotidiano.
        </p>
      </div>

      <div className="columns mt-4">
        <div className="column">
          <div className="notification is-info is-light">
            <p className="has-text-weight-bold">Aprendizagem Ativa</p>
            <p>Apoio focado no desenvolvimento do protagonismo do estudante na resolução de problemas.</p>
          </div>
        </div>
        <div className="column">
          <div className="notification is-success is-light">
            <p className="has-text-weight-bold">Integração BNCC</p>
            <p>Foco nas competências específicas de investigação científica e modelagem matemática.</p>
          </div>
        </div>
      </div>
    </section>
  );
}