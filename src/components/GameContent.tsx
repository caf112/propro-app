import React, { useState } from 'react';

interface GameContentProps {
  codeSnippet: string;
  options: string[];
  answer: string;
}

const GameContent: React.FC<GameContentProps> = ({ codeSnippet, options, answer }) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(codeSnippet.split('__').length - 1).fill(''));
  const [feedback, setFeedback] = useState('');

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswer = () => {
    const isCorrect = userAnswers.every((userAnswer, index) =>
      userAnswer.trim().toLowerCase() === answer.split(',')[index].trim().toLowerCase()
    );
    if (isCorrect) {
      setFeedback('正解です！');
    } else {
      setFeedback('不正解です。もう一度試してみてください。');
    }
  };

  return (
    <div className="fill-in-the-blank">
      <div className="code-editor">
        <pre className="code-snippet">
          {codeSnippet.split('__').map((part, index) => (
            <span key={index}>
              {part}
              {index < codeSnippet.split('__').length - 1 && (
                <select
                  value={userAnswers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="blank-select"
                >
                  <option value="" disabled>選択肢を選んでください</option>
                  {options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              )}
            </span>
          ))}
        </pre>
      </div>
      <button onClick={checkAnswer} className="check-answer-button">回答を確認する</button>
      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

// JSONデータ
const questions = [
  {
    id: 1,
    codeSnippet: "const __ = require('__');",
    options: ["fs", "path", "http"],
    answer: "fs,path"
  },
  {
    id: 2,
    codeSnippet: "function add(a, b) { return __ + __; }",
    options: ["a", "b", "c"],
    answer: "a,b"
  }
];

// メインコンポーネント
const QuizGame: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // ランダムな問題を選択する
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
  };

  return (
    <div>
      <h1>クイズゲーム</h1>
      <GameContent
        codeSnippet={questions[currentQuestionIndex].codeSnippet}
        options={questions[currentQuestionIndex].options}
        answer={questions[currentQuestionIndex].answer}
      />
      <button onClick={getRandomQuestion}>次の問題へ</button>
    </div>
  );
};

export default QuizGame;
