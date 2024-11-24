import React, { useState } from 'react';
import { ClozeProblem } from 'models/Types';
import Input from 'components/elements/input/Input';
import Button from 'components/elements/button/Button';

interface ClozeQuestionProps {
  questionData: ClozeProblem;
  onAnswer: (userAnswer: string) => void;
}

const ClozeQuestion: React.FC<ClozeQuestionProps> = ({ questionData, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = () => {
    onAnswer(userAnswer.trim());
    setUserAnswer('');
  };

  return (
    <div>
      <p>{questionData.question}</p>
      <Input
        name="answer"
        value={userAnswer}
        onChange={handleChange}
        placeholder="答えを入力"
      />
      <Button label="回答する" onClick={handleSubmit} />
    </div>
  );
};

export default ClozeQuestion;
