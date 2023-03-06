import {QuestionInfo} from "./QuestionInfo";
import {QuestionOption} from "./QuestionOption";

export interface QuestionDataActionTypes {
  type: string;
  option?: QuestionOption | undefined;
  questionList?: QuestionInfo[];
}
