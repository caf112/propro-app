export interface ChangeButtonProps {
  path: string;
}

export interface ClozeProblem {
  id: number;
  question: string;
  answer: string;
  choices: string[];
}

export interface CodeProblem {
  id: number;
  title: string;
  description: string;
  code: CodeSections;
  blanks: Blank[];
}

export interface Blank {
  id: string;
  placeholder: string;
  answer: string;
  choices: string[];
}

export interface CodeSections {
  html: string[];
  css: string[];
  js: string[];
}