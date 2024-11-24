// 質問データの型定義
export type QuestionType = {
  id: number;
  codeSnippet: string;
  options: string[];
  answer: string | string[]; 
};

// 複数の質問を管理する型
export type QuestionsJsonType = QuestionType[];

// 単一の質問データ型 (冗長性を排除するため QuestionType を再利用)
export type SingleQuestionDataType = QuestionType;

// GamePage で使用するプロパティの型定義
export type GamePageType = {
  questionsJson: QuestionsJsonType; // 質問データ
  allQuestionsData: QuestionsJsonType; // 全質問データ
};

// GameContent で使用するプロパティの型定義
export type GameContentType = GamePageType; // 同一の構造を再利用
