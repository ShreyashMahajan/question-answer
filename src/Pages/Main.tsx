import {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {QuestionsListComponent} from "../Components/QuestionsList/QuestionsList";
import {Result} from "./Result";

const Main = () => {
  return (
    <>
      <main className="main">
        <Routes>
          <Route path="/" element={<QuestionsListComponent />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
    </>
  );
};

export {Main};
