import {QuestionInfo} from "../../Modals/QuestionInfo";

interface ComponentProps {
  question: QuestionInfo;
}
const ResultItem: React.FC<ComponentProps> = ({question}) => {
  const selectedOption = question.questionoption.find(
    (option) => option.selected === true
  );
  return (
    <>
      <li className="result-item">
        <h4>{question.question}</h4>
        <p>Answer Selected : {selectedOption?.optionvalue}</p>
      </li>
    </>
  );
};

export {ResultItem};
