// Placeholder page. Community reports need a backend and a database,
// which are still being built.
function Reports() {
  return (
    <section className="card">
      <h2>Community Reports</h2>
      <p className="info">🚧 Coming soon</p>
      <p>
        Students will be able to report suspicious companies and search reports
        made by others. If a company has been reported, its risk score goes up.
      </p>
      <p className="muted">
        Planned: Node.js + Express API with a MongoDB database to store the reports.
      </p>
    </section>
  );
}

export default Reports;
