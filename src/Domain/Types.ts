export interface QuizGameProps {
    playerName: string;
    
  }
  
export interface Question {
    id: number;
    code: string;
    options: string[];
    correctAnswer: number;
  }