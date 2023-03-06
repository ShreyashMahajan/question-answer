import "./App.css";
import {QuestionDataProvider} from "./Context/quizDataContext";
import {Main} from "./Pages/Main";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {Result} from "./Pages/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QuestionDataProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </QuestionDataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
