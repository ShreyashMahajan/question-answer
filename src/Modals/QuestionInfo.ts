import {QuestionOption} from "./QuestionOption";

export interface QuestionInfo {
  attributetype: number;
  question: string;
  questionid: number;
  questiontype: string;
  validation: boolean;
  questionoption: QuestionOption[];
}
