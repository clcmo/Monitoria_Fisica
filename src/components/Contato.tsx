export default function Contato() {
  return (
    <section className="box">
      <h2 className="title is-4">Canais de Contato</h2>
      <p className="mb-4">
        Entre em contato com a coordenação do projeto ou diretamente com a equipe pedagógica.
      </p>
      <div className="content">
        <ul>
          <li><strong>E-mail Institucional:</strong> monitoriaetecbraz@gmail.com</li>
          <li><strong>Atendimento Presencial:</strong> Consulte os <a href="./Horarios">horários</a></li>
          <li>
            <strong>Repositório do Projeto:</strong>{' '}
            <a href="https://github.com/clcmo/Monitoria_Fisica" target="_blank" rel="noreferrer">
              github.com/clcmo/Monitoria_Fisica
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}