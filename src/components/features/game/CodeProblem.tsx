import React, { useState, useEffect } from 'react';
import { CodeProblem } from 'models/Types';
import Button from 'components/elements/button/Button';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('css', css);

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

  const renderCode = () => {
    const codeString = problemData.code.map((line) => {
      return line.replace(/\[\[blank_(\d+)\]\]/g, (match, p1) => {
        const blankId = `blank_${p1}`;
        const blank = problemData.blanks.find(b => b.id === blankId);
        const userAnswer = answers[blankId] || '';
        const displayValue = showSolution ? blank!.answer : userAnswer || '___';
        return displayValue;
      });
    }).join('\n');

    return (
      <SyntaxHighlighter language="html" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  const renderInputs = () => {
    return problemData.blanks.map((blank, index) => {
      const userAnswer = answers[blank.id] || '';

      if (showSolution) {
        return (
          <div key={index}>
            <strong>{blank.placeholder}:</strong> {blank.answer}
          </div>
        );
      } else {
        return (
          <div key={index}>
            <strong>{blank.placeholder}:</strong>
            <select
              value={userAnswer}
              onChange={(e) => handleChange(blank.id, e.target.value)}
            >
              <option value="" disabled>
                選択してください
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
    });
  };

  return (
    <div>
      <h2>{problemData.title}</h2>
      <p>{problemData.description}</p>
      {renderCode()}
      <div>{renderInputs()}</div>
      <Button label="回答する" onClick={handleSubmit} />
      <Button label="解答を見る" onClick={handleShowSolution} />
    </div>
  );
};

export default CodeProblemComponent;
