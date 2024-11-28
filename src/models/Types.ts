import { ReactNode } from "react";

export interface ChangeButtonProps {
  path: string;
  label: string;
}

export interface ResultButtonProps {
  path:string;
  label:string;
  onClick: () => void;
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


export interface UserContextProps {
  user: User;
  setUser: (user: User) => void;
}

export interface ProtectedRouteProps {
  children: ReactNode;
}

export interface CodeProblemProps {
  problemData: CodeProblem;
  onComplete: () => void;
}

export interface AwsAuthProps {
  signOut: () => void;
  user: {
    username: string,
    attributes: {
      email: string;
    }
  } | null;
}

// 型定義
export interface User  {
  username: string;
  email: string;
  gitUserName: string;
  githubRepo: string;
  [key: string]: any; // 必要に応じて追加
};

export interface UserContextType  {
  user: User | null;
  setUser: (user: User | null) => void;
};

export interface UserProviderProps  {
  children: ReactNode; // これが型エラーを解決します
};