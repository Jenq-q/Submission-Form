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
  const [textAnswers, setTextAnswers] = useState([""]);
  const [radioAnswers, setRadioAnswers] = useState([""]);
  const [checkboxAnswers, setCheckboxAnswers] = useState([[]]);
  const [resume, setResume] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  function textAnswerChangeHandler(event, i) {
    const newAnswers = [...textAnswers];
    newAnswers[i] = event.target.value;
    setTextAnswers(newAnswers);
    console.log("Answers:", textAnswers);
  }
  function radioAnswerChangeHandler(event, i) {
    const newAnswers = [...radioAnswers];
    newAnswers[i] = event.target.value;
    setRadioAnswers(newAnswers);
    console.log("Radio Answers:", newAnswers);
  }
  function checkboxAnswerChangeHandler(event, i) {
    const value = event.target.value;
    const checked = event.target.checked;
    const newAnswers = [...checkboxAnswers];
    if (!Array.isArray(newAnswers[i])) {
      newAnswers[i] = [];
    }
    if (checked) {
      if (!newAnswers[i].includes(value)) {
        newAnswers[i].push(value);
      }
    } else {
      newAnswers[i] = newAnswers[i].filter((v) => v != value);
    }
    setCheckboxAnswers(newAnswers);
    if (Array.isArray(newAnswers[i])) {
      newAnswers[i].forEach(function (item) {
        console.log(item);
      });
    }
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
            <RadioTypeQ
              question="Gender?"
              answers={["male", "female", "others"]}
              onRadioChange={radioAnswerChangeHandler}
              i={0}
            />
          </li>
          <li>
            <RadioTypeQ
              question="College level?"
              answers={["first", "second", "third"]}
              onRadioChange={radioAnswerChangeHandler}
              i={1}
            />
          </li>
          <li>
            <CheckboxTypeQ
              question="What is your best subject?"
              answers={["Math", "Science", "Computer"]}
              onCheckboxChange={checkboxAnswerChangeHandler}
              i={0}
            />
          </li>
          <li>
            <CheckboxTypeQ
              question="Why are you hot?"
              answers={["summer", "clothes"]}
              onCheckboxChange={checkboxAnswerChangeHandler}
              i={1}
            />
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
