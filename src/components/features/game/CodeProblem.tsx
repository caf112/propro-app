import React, { useState } from 'react';
import { CodeProblem } from 'models/Types';
import Input from 'components/elements/input/Input';
import Button from 'components/elements/button/Button';

interface CodeProblemProps {
  problemData: CodeProblem;
  onComplete: () => void;
}

const CodeProblemComponent: React.FC<CodeProblemProps> = ({ problemData, onComplete }) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const handleChange = (blankId: string, value: string) => {
    setAnswers({ ...answers, [blankId]: value });
  };

  const handleSubmit = () => {
    let allCorrect = true;
    for (const blank of problemData.blanks) {
      if (answers[blank.id]?.trim() !== blank.answer.trim()) {
        allCorrect = false;
        break;
      }
    }
    if (allCorrect) {
      alert('正解です！');
      onComplete();
    } else {
      alert('不正解です。再度ご確認ください。');
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  // コードをレンダリング
  const renderCode = () => {
    return problemData.code.map((line, index) => {
      const regex = /\[\[blank_(\d+)\]\]/g;
      const parts = line.split(regex);
      return (
        <div key={index} style={{ whiteSpace: 'pre' }}>
          {parts.map((part, idx) => {
            if (idx % 2 === 0) {
              return part;
            } else {
              const blankId = `blank_${part}`;
              const blank = problemData.blanks.find(b => b.id === blankId);
              if (!blank) return null;

              const userAnswer = answers[blankId] || '';

              if (showSolution) {
                // 解答を表示
                return (
                  <span key={idx} style={{ backgroundColor: '#e0ffe0' }}>
                    {blank.answer}
                  </span>
                );
              } else {
                // 選択肢を表示
                return (
                  <div key={idx} style={{ display: 'inline-block', margin: '0 4px' }}>
                    <select
                      value={userAnswer}
                      onChange={(e) => handleChange(blankId, e.target.value)}
                    >
                      <option value="" disabled>
                        {blank.placeholder}
                      </option>
                      {blank.choices.map((choice, choiceIdx) => (
                        <option key={choiceIdx} value={choice}>
                          {choice}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }
            }
          })}
        </div>
      );
    });
  };

  return (
    <div>
      <h2>{problemData.title}</h2>
      <p>{problemData.description}</p>
      <pre style={{ backgroundColor: '#f5f5f5', padding: '16px' }}>
        {renderCode()}
      </pre>
      <Button label="回答する" onClick={handleSubmit} />
      <Button label="解答を見る" onClick={handleShowSolution} />
    </div>
  );
};

export default CodeProblemComponent;
