import { useState } from "react";
import { checkOffer } from "../utils/riskChecker.js";

function Analyze() {
  // Form fields
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  // What we show after clicking the button
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading
    setError("");
    setResult(null);

    if (text.trim() === "") {
      setError("Please paste the offer message.");
      return;
    }

    setResult(checkOffer(text, email));
  }

  return (
    <section className="card">
      <h2>Analyze an Offer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Sender's email (optional)
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. hr@company.com"
          />
        </label>
        <label>
          Offer message
          <textarea
            rows="7"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste the full offer message here"
          />
        </label>
        <button type="submit">Check Offer</button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <p>
            Risk level:{" "}
            <span className={`badge ${result.level.toLowerCase()}`}>{result.level}</span>{" "}
            (score {result.score})
          </p>
          {result.reasons.length > 0 ? (
            <ul>
              {result.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          ) : (
            <p>No common red flags found. Still verify the offer with the company directly.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Analyze;
