import React, { useState } from 'react';
import ClozeQuestion from './ClozeQuestion';
import clozeProblemsData from "datas/EnglishQuestions.json";
import { ClozeProblem } from 'models/Types';

const clozeProblems: ClozeProblem[] = clozeProblemsData;

const ClozeGame: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const currentQuestion: ClozeProblem = clozeProblems[currentQuestionIndex];

  const handleAnswer = (userAnswer: string) => {
    if (userAnswer === currentQuestion.answer) {
      alert('正解です！');
      setScore(score + 1);
    } else {
      alert(`不正解です。正しい答えは "${currentQuestion.answer}" です。`);
    }

    if (currentQuestionIndex < clozeProblems.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`ゲーム終了！あなたの得点は ${score + 1}/${clozeProblems.length} です。`);
      // ゲームをリセットする場合
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div>
      <h2>穴埋めゲーム（選択式）</h2>
      <ClozeQuestion questionData={currentQuestion} onAnswer={handleAnswer} />
      <p>
        問題 {currentQuestionIndex + 1} / {clozeProblems.length}
      </p>
      <p>得点: {score}</p>
    </div>
  );
};

export default ClozeGame;
