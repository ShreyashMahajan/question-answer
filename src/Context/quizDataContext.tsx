import React, {createContext, useContext, useReducer} from "react";
import {QuestionDataActionTypes} from "../Modals/QuestionDataActionTypes";
import {QuestionDataContext} from "../Modals/QuestionDataContext";
import {QuestionDataState} from "../Modals/QuestionDataState";
import {QuestionInfo} from "../Modals/QuestionInfo";
import {QuestionOption} from "../Modals/QuestionOption";
import {questionDataReducer} from "../Reducers/questionDataReducer";
import {questionData} from "../Shared/QuestionsData";

const questionList = questionData.questions;

const QuestiondataContext = createContext<QuestionDataContext>({
  currentIndex: 0,
  currentQuestion: questionList[0],
  onClickNext: () => {},
  onClickPrevious: () => {},
  onClickSubmit: () => {},
  questionListLength: questionList.length,
  questionList,
  resetQuizData: () => {},
});

interface ComponentProps {
  children: React.ReactNode;
}

const QuestionDataProvider: React.FC<ComponentProps> = ({children}) => {
  const [state, dispatch] = useReducer<
    React.Reducer<QuestionDataState, QuestionDataActionTypes>
  >(questionDataReducer, {
    currentIndex: 0,
    questionList,
  });

  let currentQuestion: QuestionInfo = questionList[0];

  if (state.questionList) {
    currentQuestion = state?.questionList[state.currentIndex];
  }

  const questionListLength = questionList.length;

  const currentIndex = state.currentIndex;

  const onClickNext = (option?: QuestionOption) => {
    dispatch({
      type: "MOVE_TO_NEXT",
      option,
    });
  };

  const onClickPrevious = (option?: QuestionOption) => {
    dispatch({
      type: "MOVE_TO_PREVIOUS",
      option,
    });
  };

  const onClickSubmit = (option?: QuestionOption) => {
    dispatch({
      type: "SUBMIT",
      option,
    });
  };

  const resetQuizData = () => {
    dispatch({
      type: "RESET",
      questionList,
    });
  };

  return (
    <QuestiondataContext.Provider
      value={{
        currentIndex,
        currentQuestion,
        onClickNext,
        onClickPrevious,
        onClickSubmit,
        questionListLength,
        questionList: state.questionList ?? [],
        resetQuizData,
      }}
    >
      {children}
    </QuestiondataContext.Provider>
  );
};

const useQuestionData = (): QuestionDataContext =>
  useContext(QuestiondataContext);

export {QuestionDataProvider, useQuestionData};
