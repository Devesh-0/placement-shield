import { useState } from "react";
import Analyze from "./pages/Analyze.jsx";
import Reports from "./pages/Reports.jsx";

function App() {
  // Which page is showing: "analyze" or "reports"
  const [page, setPage] = useState("analyze");

  return (
    <div className="app">
      <header className="header">
        <h1>🛡️ Placement Shield</h1>
        <p>Check job and internship offers for common signs of fraud.</p>
        <nav className="nav">
          <button
            className={page === "analyze" ? "active" : ""}
            onClick={() => setPage("analyze")}
          >
            Analyze an Offer
          </button>
          <button
            className={page === "reports" ? "active" : ""}
            onClick={() => setPage("reports")}
          >
            Community Reports
          </button>
        </nav>
      </header>

      <main>{page === "analyze" ? <Analyze /> : <Reports />}</main>

      <footer className="footer">
        This is a rule-based guide, not a guarantee. Always verify offers through the
        official company website or your placement cell.
      </footer>
    </div>
  );
}

export default App;
