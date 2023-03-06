import {useQuestionData} from "../../Context/quizDataContext";
import Question from "../Question/Question";
const QuestionsListComponent = () => {
  const {currentQuestion} = useQuestionData();

  return (
    <section className="question-list">
      <Question questionInfo={currentQuestion} />
    </section>
  );
};

export {QuestionsListComponent};
