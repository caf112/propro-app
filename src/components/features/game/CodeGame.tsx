import React, { useState,useEffect } from 'react';
import CodeProblemComponent from './CodeProblem';
import codeProblemsData from 'datas/CodeQuestions.json';
import { CodeProblem } from 'models/Types';
import { shuffleArray } from 'common/utils/ShaffleArray';

const codeProblems: CodeProblem[] = codeProblemsData;

const CodeGame: React.FC = () => {
  const [problems, setProblems] = useState<CodeProblem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);

  useEffect(() => {
    // 問題の配列をシャッフルしてステートに設定
    const shuffledProblems = shuffleArray(codeProblemsData);
    setProblems(shuffledProblems);
  }, []);

  const handleComplete = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
    } else {
      alert('全ての問題を解きました！お疲れ様でした。');
      // 必要に応じてリセットや他の処理を行う

      const shuffledProblems = shuffleArray(codeProblemsData);
    setProblems(shuffledProblems);
    setCurrentProblemIndex(0);
    }
  };

  if (problems.length === 0) {
    // 問題がまだロードされていない場合の処理
    return <div>読み込み中...</div>;
  }

  const currentProblem = problems[currentProblemIndex];

  return (
    <div>
      <CodeProblemComponent problemData={currentProblem} onComplete={handleComplete} />
    </div>
  );
};

export default CodeGame;
