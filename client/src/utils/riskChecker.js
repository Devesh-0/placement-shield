// The "brain" of Placement Shield: a rule-based checker.
// It runs in the browser for now. Next step: move it to an Express backend.
// Each red flag has a list of keywords and a number of points.
// If the offer text contains any keyword, the points are added to the score.

const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.in",
  "outlook.com",
  "hotmail.com",
  "rediffmail.com",
  "icloud.com",
  "protonmail.com",
];

const RULES = [
  {
    name: "Asks for money",
    points: 3,
    keywords: [
      "registration fee",
      "security deposit",
      "refundable deposit",
      "processing fee",
      "training fee",
      "joining fee",
      "kit fee",
      "pay rs",
      "pay ₹",
    ],
  },
  {
    name: "Urgency pressure",
    points: 1,
    keywords: [
      "urgent",
      "immediately",
      "within 24 hours",
      "limited seats",
      "last chance",
      "act now",
      "today only",
    ],
  },
  {
    name: "Too-good-to-be-true pay",
    points: 2,
    keywords: [
      "no experience needed",
      "no experience required",
      "guaranteed income",
      "earn up to",
      "per week",
      "easy money",
    ],
  },
  {
    name: "Asks for sensitive documents early",
    points: 2,
    keywords: ["aadhaar", "aadhar", "pan card", "bank details", "bank account", "otp"],
  },
];

// Score -> risk level
function getLevel(score) {
  if (score >= 6) return "High";
  if (score >= 3) return "Medium";
  return "Low";
}

function checkOffer(text, email) {
  const lowerText = (text || "").toLowerCase();
  let score = 0;
  const reasons = [];

  for (const rule of RULES) {
    const found = rule.keywords.filter((keyword) => lowerText.includes(keyword));
    if (found.length > 0) {
      score += rule.points;
      reasons.push(`${rule.name} (+${rule.points}): found "${found.join('", "')}"`);
    }
  }

  if (email) {
    const domain = email.trim().toLowerCase().split("@")[1];
    if (domain && PERSONAL_EMAIL_DOMAINS.includes(domain)) {
      score += 2;
      reasons.push(`Personal email domain (+2): sent from @${domain} instead of a company domain`);
    }
  }

  return { score, level: getLevel(score), reasons };
}

export { checkOffer, getLevel };
