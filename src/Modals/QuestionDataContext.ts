import {QuestionInfo} from "./QuestionInfo";
import {QuestionOption} from "./QuestionOption";

export interface QuestionDataContext {
  currentIndex: number;
  currentQuestion: QuestionInfo;
  onClickNext: (option?: QuestionOption) => void;
  onClickPrevious: (option?: QuestionOption) => void;
  onClickSubmit: (option?: QuestionOption) => void;
  questionListLength: number;
  questionList: QuestionInfo[];
  resetQuizData: () => void;
}
