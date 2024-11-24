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
  code: string[];
  blanks: Blank[];
}

export interface Blank {
  id: string;
  placeholder: string;
  answer: string;
  choices: string[];
}