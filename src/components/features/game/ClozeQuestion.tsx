import React, { useState,useEffect } from 'react';
import { ClozeProblem } from 'models/Types';
import Button from 'components/elements/button/Button';

interface ClozeQuestionProps {
  questionData: ClozeProblem;
  onAnswer: (userAnswer: string) => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

const ClozeQuestion: React.FC<ClozeQuestionProps> = ({ questionData, onAnswer }) => {
    const [selectedChoice, setSelectedChoice] = useState<string>('');
    const [shuffledChoices, setShuffledChoices] = useState<string[]>([]);

    useEffect(() => {
        // 選択肢をシャッフルしてステートに設定
        const shuffled = shuffleArray(questionData.choices);
        setShuffledChoices(shuffled);
      }, [questionData]);
  
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
        {shuffledChoices.map((choice, index) => (
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
