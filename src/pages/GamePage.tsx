import React from 'react';
import { GamePageType } from 'models/Types';
import 'styles/App.css';

const GamePage: React.FC<GamePageType> = ({ questionsJson, allQuestionsData }) => {
  return (
    <div>
      <h1>Game Page</h1>
      <div>
        <h2>All Questions</h2>
        {allQuestionsData.map((question) => (
          <div key={question.id}>
            <p>{question.codeSnippet}</p>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
