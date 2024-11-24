import React, { useState } from 'react';
import { ClozeProblem } from 'models/Types';
import Button from 'components/elements/button/Button';

interface ClozeQuestionProps {
  questionData: ClozeProblem;
  onAnswer: (userAnswer: string) => void;
}

const ClozeQuestion: React.FC<ClozeQuestionProps> = ({ questionData, onAnswer }) => {
    const [selectedChoice, setSelectedChoice] = useState<string>('');
  
    const handleChoiceSelect = (choice: string) => {
      setSelectedChoice(choice);
    };

  const handleSubmit = () => {
    if (selectedChoice === '') {
      alert('選択肢を選んでください。');
      return;
    }
    onAnswer(selectedChoice);
    setSelectedChoice('');
  };

  return (
    <div>
      <p>{questionData.question}</p>
      <div>
        {questionData.choices.map((choice, index) => (
          <label key={index} style={{ display: 'block', marginBottom: '8px' }}>
            <input
              type="radio"
              name={`question-${questionData.id}`}
              value={choice}
              checked={selectedChoice === choice}
              onChange={() => handleChoiceSelect(choice)}
            />
            {choice}
          </label>
        ))}
      </div>
      <Button label="回答する" onClick={handleSubmit} />
    </div>
  );
};

export default ClozeQuestion;
