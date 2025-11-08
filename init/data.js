const samplePolls = [
  {
    question: "When should we play this week?",
    description:
      "Choose your preferred time slot for our weekly futsal match. Most voted time will be finalized.",
    options: [
      { optionText: "Friday, 7:00 AM", votes: 0 },
      { optionText: "Friday, 5:30 PM", votes: 0 },
      { optionText: "Saturday, 7:00 AM", votes: 0 },
      { optionText: "Saturday, 5:00 PM", votes: 0 },
    ],
    image: {
      filename: "pollimage",
      url: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60",
    },
    createdBy: "671a9f5bcde34a1a99d3e5e8",
    expiresAt: "2025-11-09T23:59:59Z",
  },
  {
    question: "Which futsal ground should we book this week?",
    description:
      "Vote for the futsal ground where you'd prefer to play this weekend.",
    options: [
      { optionText: "Bhaktapur Futsal Arena", votes: 0 },
      { optionText: "Madhyapur Turf", votes: 0 },
      { optionText: "The Zone Futsal", votes: 0 },
      { optionText: "Khwopa Futsal", votes: 0 },
    ],
    image: {
      filename: "pollimage",
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=60",
    },
    createdBy: "671a9f5bcde34a1a99d3e5e8",
    expiresAt: "2025-11-08T18:00:00Z",
  },
  {
    question: "What match format do you prefer this week?",
    description:
      "Choose your preferred format for the upcoming futsal game.",
    options: [
      { optionText: "5v5 (short game)", votes: 0 },
      { optionText: "7v7 (medium)", votes: 0 },
      { optionText: "9v9 (full field)", votes: 0 },
    ],
    image: {
      filename: "pollimage",
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=60",
    },
    createdBy: "671a9f5bcde34a1a99d3e5e8",
    expiresAt: "2025-11-10T00:00:00Z",
  },
  {
    question: "How should we divide teams?",
    description:
      "Pick how teams should be formed for this match.",
    options: [
      { optionText: "Random shuffle", votes: 0 },
      { optionText: "By performance", votes: 0 },
      { optionText: "Captains pick", votes: 0 },
    ],
    image: {
      filename: "pollimage",
      url: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=60",
    },
    createdBy: "671a9f5bcde34a1a99d3e5e8",
    expiresAt: "2025-11-09T12:00:00Z",
  },
  {
    question: "What should be this week’s match fee?",
    description:
      "Vote on how much each player should contribute for the match.",
    options: [
      { optionText: "Rs. 150", votes: 0 },
      { optionText: "Rs. 200", votes: 0 },
      { optionText: "Rs. 250", votes: 0 },
    ],
    image: {
      filename: "pollimage",
      url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=800&q=60",
    },
    createdBy: "671a9f5bcde34a1a99d3e5e8",
    expiresAt: "2025-11-07T12:00:00Z",
  },
];

module.exports = { data: samplePolls };
