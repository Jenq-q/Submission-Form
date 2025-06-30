import "./App.css";
import CheckboxTypeQ from "./components/QuestionTypes/CheckboxTypeQ";
import DateTypeQ from "./components/QuestionTypes/DateTypeQ";
import LinkTypeQ from "./components/QuestionTypes/LinkTypeQ";
import LongAnswerTypeQ from "./components/QuestionTypes/LongAnswerTypeQ";
import RadioTypeQ from "./components/QuestionTypes/RadioTypeQ";
import ShortAnswerTypeQ from "./components/QuestionTypes/ShortAnswerTypeQ";
import UploadTypeQ from "./components/QuestionTypes/UploadTypeQ";
import SelectionTypeQ from "./components/QuestionTypes/SelectionTypeQ";
import { useState } from "react";

function App() {
  const [answers, setAnswers] = useState([""]);

  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [bestSubjects, setBestSubjects] = useState([]);
  const [resume, setResume] = useState(null);
  const [portfolioLink, setPortfolioLink] = useState("");
  const [startDate, setStartDate] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  function textAnswerChangeHandler(event, i) {
    const newAnswers = [...answers];
    newAnswers[i] = event.target.value;
    setAnswers(newAnswers);
    console.log("Answers:", answers);
  }

  return (
    <div className="App">
      <div className="Title">
        <h1 className="App-header">Submission Form</h1>
      </div>
      <div className="App-content">
        <h2 className="App-subtitle">Please fill out the form below</h2>
        <ul className="App-questions">
          <li>
            <ShortAnswerTypeQ
              question="First name?"
              onAnswerChange={textAnswerChangeHandler}
              i={0}
            />
          </li>
          <li>
            <ShortAnswerTypeQ
              question="Last name?"
              onAnswerChange={textAnswerChangeHandler}
              i={1}
            />
          </li>
          <li>
            <LongAnswerTypeQ
              question="Please describe your experience with our company."
              onAnswerChange={textAnswerChangeHandler}
              i={2}
            />
          </li>
          <li>
            <RadioTypeQ question="Gender?" />
          </li>
          <li>
            <CheckboxTypeQ question="What is your best subject?" />
          </li>
          <li>
            <UploadTypeQ question="Please upload your resume." />
          </li>
          <li>
            <LinkTypeQ
              question="Please provide a link to your portfolio."
              onAnswerChange={textAnswerChangeHandler}
              i={3}
            />
          </li>
          <li>
            <DateTypeQ question="When can you start?" />
          </li>
          <li>
            <SelectionTypeQ question="How would you describe your skill level in what fields?" />
          </li>
        </ul>
        <form className="button-section">
          <div className="reset-button">
            <button type="reset" id="reset" className="App-button">
              Reset
            </button>
            <label htmlFor="reset" className="App-label">
              Reset
            </label>
          </div>
          <div className="submit-button">
            <button type="submit" id="submit" className="App-button">
              Submit
            </button>
            <label htmlFor="submit" className="App-label">
              Submit
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
