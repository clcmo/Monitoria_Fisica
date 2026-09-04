import { MONITORES } from '../data/monitores';

export default function Horarios() {
  return (
    <section className="box">
      <h2 className="title is-4">Horários de Atendimento</h2>
      <p className="mb-4">Confira a disponibilidade para atendimentos presenciais e plantões digitais:</p>

      <div className="table-container">
        <table className="table is-fullwidth is-striped is-hoverable">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Área BNCC</th>
              <th>Atendimento / Horário</th>
              <th>Local</th>
            </tr>
          </thead>
          <tbody>
            {MONITORES.map((m) => (
              <tr key={m.id}>
                <td className="has-text-weight-bold">{m.materia}</td>
                <td className="has-text-grey">{m.areaBNCC}</td>
                <td>{m.horario}</td>
                <td>{m.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}