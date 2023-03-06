import {QuestionDataActionTypes} from "../Modals/QuestionDataActionTypes";
import {QuestionDataState} from "../Modals/QuestionDataState";
import {QuestionInfo} from "../Modals/QuestionInfo";
import {QuestionOption} from "../Modals/QuestionOption";

const getUpdatedQuestionList = (
  currentIndex: number,
  questionList?: QuestionInfo[],
  updatedOption?: QuestionOption
) => {
  let updatedQuestionList;
  if (updatedOption) {
    updatedQuestionList = questionList?.map((question, index) =>
      index === currentIndex
        ? {
            ...question,
            questionoption: question.questionoption.map((option) =>
              option.optionid === updatedOption.optionid
                ? updatedOption
                : option
            ),
          }
        : question
    );
  }
  return updatedQuestionList;
};

const questionDataReducer = (
  state: QuestionDataState,
  action: QuestionDataActionTypes
) => {
  switch (action.type) {
    case "MOVE_TO_NEXT":
      const updatedQuestionList = getUpdatedQuestionList(
        state.currentIndex,
        state.questionList,

        action.option
      );

      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        questionList: updatedQuestionList ?? state.questionList,
      };
    case "MOVE_TO_PREVIOUS":
      const updatedList = getUpdatedQuestionList(
        state.currentIndex,
        state.questionList,

        action.option
      );

      return {
        ...state,
        currentIndex: state.currentIndex - 1,
        questionList: updatedList ?? state.questionList,
      };
    case "SUBMIT":
      const qustionListAfterSubmit = getUpdatedQuestionList(
        state.currentIndex,
        state.questionList,

        action.option
      );
      return {
        ...state,
        questionList: qustionListAfterSubmit ?? state.questionList,
      };

    case "RESET":
      return {
        ...state,
        questionList: action.questionList,
        currentIndex: 0,
      };
    default:
      return state;
  }
};

export {questionDataReducer};
