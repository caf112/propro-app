import React, { useState } from 'react';
import { CodeProblem } from 'models/Types';
import Button from 'components/elements/button/Button';
import CodeRunner from './CodeRunner';
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
  const [showRunner, setShowRunner] = useState<boolean>(false);
  const [userHtmlCode, setUserHtmlCode] = useState<string>('');
  const [userCssCode, setUserCssCode] = useState<string>('');
  const [userJsCode, setUserJsCode] = useState<string>('');

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

  const getUserCode = () => {
    const processCode = (codeLines: string[]) => {
      return codeLines.map((line) => {
        return line.replace(/\[\[blank_(\d+)\]\]/g, (match, p1) => {
          const blankId = `blank_${p1}`;
          const userAnswer = answers[blankId] || '';
          return showSolution ? problemData.blanks.find(b => b.id === blankId)?.answer || '' : userAnswer || '___';
        });
      }).join('\n');
    };

    const htmlCode = processCode(problemData.code.html);
    const cssCode = processCode(problemData.code.css);
    const jsCode = processCode(problemData.code.js);

    return { htmlCode, cssCode, jsCode };
  };

  const handleRunCode = () => {
    const { htmlCode, cssCode, jsCode } = getUserCode();
    localStorage.setItem('htmlCode', htmlCode);
    localStorage.setItem('cssCode', cssCode);
    localStorage.setItem('jsCode', jsCode);
    console.log("HTML Code:", htmlCode);
    console.log("CSS Code:", cssCode);
    console.log("JS Code:", jsCode);

    window.location.href = '/preview';
  };

  const renderCodeSection = (language: string, code: string) => (
    <SyntaxHighlighter language={language} style={docco}>
      {code}
    </SyntaxHighlighter>
  );

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

  const { htmlCode, cssCode, jsCode } = getUserCode();

  return (
    <div>
      <h2>{problemData.title}</h2>
      <p>{problemData.description}</p>
      

      <h3>HTMLコード</h3>
      {renderCodeSection('html', htmlCode)}

      {cssCode.trim() && (
        <>
          <h3>CSSコード</h3>
          {renderCodeSection('css', cssCode)}
        </>
      )}

      {jsCode.trim() && (
        <>
          <h3>JavaScriptコード</h3>
          {renderCodeSection('javascript', jsCode)}
        </>
      )}

      <div>{renderInputs()}</div>

      <Button label="回答する" onClick={handleSubmit} />
      <Button label="解答を見る" onClick={handleShowSolution} />
      <Button label="コードを実行する" onClick={handleRunCode} />
    </div>
  );
};

export default CodeProblemComponent;
