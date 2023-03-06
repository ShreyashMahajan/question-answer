import React, {useState} from "react";
import {useQuestionData} from "../../Context/quizDataContext";
import {QuestionInfo} from "../../Modals/QuestionInfo";
import {QuestionOption} from "../../Modals/QuestionOption";
import {OptionComp} from "../OptionComp/OptionComp";
import {useNavigate} from "react-router-dom";

interface ComponentProps {
  questionInfo: QuestionInfo;
}

const Question: React.FC<ComponentProps> = ({questionInfo}) => {
  const {
    onClickNext,
    onClickPrevious,
    currentIndex,
    questionListLength,
    onClickSubmit,
  } = useQuestionData();

  const navigate = useNavigate();

  const [updatedOption, setUpdatedOption] = useState<QuestionOption>();

  const handleOnClickNext = () => {
    onClickNext(updatedOption);
    setUpdatedOption(undefined);
  };

  const handleOnClickPrevious = () => {
    onClickPrevious(updatedOption);
    setUpdatedOption(undefined);
  };

  const handleOnChangeOption = (currentOption: QuestionOption) => {
    setUpdatedOption(currentOption);
  };

  const handleOnSubmit = () => {
    onClickSubmit(updatedOption);
    setUpdatedOption(undefined);
    navigate("/result");
  };
  return (
    <div className="w-50">
      <div>
        <h4>{questionInfo.question}</h4>
      </div>
      <div className="mb-1">
        {questionInfo.questionoption.map((option) => (
          <OptionComp
            option={option}
            optionType={questionInfo.questiontype}
            optionId={questionInfo.questionid}
            key={option.optionid}
            onChangeOption={handleOnChangeOption}
          />
        ))}
      </div>
      <div className="d-flex justify-space-between">
        <button
          className={`btn cursor-pointer ${
            currentIndex === 0 ? "disable" : ""
          } `}
          onClick={handleOnClickPrevious}
          disabled={currentIndex === 0}
        >
          Prev
        </button>

        <button
          className="btn cursor-pointer"
          onClick={
            currentIndex < questionListLength - 1
              ? handleOnClickNext
              : handleOnSubmit
          }
        >
          {currentIndex < questionListLength - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Question;
