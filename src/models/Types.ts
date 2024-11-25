export interface ChangeButtonProps {
  path: string;
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

export interface CodeRunnerProps {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}