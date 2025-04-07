import { useState } from "react";
import "./styles.scss";

const Poll = ({ pollData }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [rating, setRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [hasRated, setHasRated] = useState(false);

  const handleVote = (option) => {
    if (!hasVoted) {
      setSelectedOption(option);
      setHasVoted(true);
    }
  };

  const handleRating = (rate) => {
    if (!hasRated) {
      setRating(rate);
      setHasRated(true);
    }
  };

  return (
    <div className="poll-container">
      <h2>{pollData.question}</h2>
      <ul>
        {pollData.options.map((option, index) => (
          <li
            key={index}
            className={selectedOption === option ? "selected" : ""}
            onClick={() => handleVote(option)}
          >
            {option}
          </li>
        ))}
      </ul>

      {hasVoted && <p className="voted-message">You have voted!</p>}

      <div className="rating">
        <h3>Rate this poll</h3>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`star ${num <= rating ? "filled" : ""} ${
                hasRated ? "locked" : ""
              }`}
              onClick={() => handleRating(num)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {hasRated && <p className="rate-message">You have rated this poll!</p>}
    </div>
  );
};

export default function App() {
  const pollDataArray = [
    {
      question: "What's your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C++"],
    },
    {
      question: "Which frontend framework do you prefer?",
      options: ["React", "Vue", "Angular", "Svelte"],
    },
    {
      question: "Best cloud provider?",
      options: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    },
    {
      question: "Favorite OS for development?",
      options: ["Windows", "MacOS", "Linux", "BSD"],
    },
  ];

  return (
    <div className="app">
      <h1>Rate Polls</h1>
      {pollDataArray.map((pollData, index) => (
        <Poll key={index} pollData={pollData} />
      ))}
    </div>
  );
}
