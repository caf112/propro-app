import React, { useState } from 'react';
import CodeProblemComponent from './CodeProblem';
import codeProblemsData from 'datas/CodeQuestions.json';
import { CodeProblem } from 'models/Types';

const codeProblems: CodeProblem[] = codeProblemsData;

const CodeGame: React.FC = () => {
  const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);

  const handleComplete = () => {
    if (currentProblemIndex < codeProblems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
    } else {
      alert('全ての問題を解きました！お疲れ様でした。');
      //リザルトページへ飛ぶ
    }
  };

  const currentProblem = codeProblems[currentProblemIndex];

  return (
    <div>
      <CodeProblemComponent problemData={currentProblem} onComplete={handleComplete} />
    </div>
  );
};

export default CodeGame;
