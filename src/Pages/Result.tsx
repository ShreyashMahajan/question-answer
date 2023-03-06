import React from "react";
import {useNavigate} from "react-router-dom";
import {ResultItem} from "../Components/ResultItem/ResultItem";
import {useQuestionData} from "../Context/quizDataContext";
import {QuestionInfo} from "../Modals/QuestionInfo";

interface ComponentProps {}

type CombinedProps = ComponentProps;

const Result: React.FC<CombinedProps> = () => {
  const {questionList, resetQuizData} = useQuestionData();
  const navigate = useNavigate();
  const resultList: QuestionInfo[] = questionList;

  const handleOnStart = () => {
    resetQuizData();
    navigate("/");
  };
  return (
    <section className="result-container">
      <div className="result-header">
        <h2>Result</h2>
      </div>
      <ul className="result-list">
        {resultList.map((question) => (
          <ResultItem question={question} />
        ))}
      </ul>
      <button className="btn cursor-pointer" onClick={handleOnStart}>
        start again
      </button>
    </section>
  );
};

export {Result};
