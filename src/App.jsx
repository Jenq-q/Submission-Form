import "./App.css";
import CheckboxTypeQ from "./components/QuestionTypes/CheckboxTypeQ";
import DateTypeQ from "./components/QuestionTypes/DateTypeQ";
import LinkTypeQ from "./components/QuestionTypes/LinkTypeQ";
import LongAnswerTypeQ from "./components/QuestionTypes/LongAnswerTypeQ";
import RadioTypeQ from "./components/QuestionTypes/RadioTypeQ";
import ShortAnswerTypeQ from "./components/QuestionTypes/ShortAnswerTypeQ";
import UploadTypeQ from "./components/QuestionTypes/UploadTypeQ";
import SelectionTypeQ from "./components/QuestionTypes/SelectionTypeQ";

function App() {
  return (
    <>
      <div className="Title">
        <h1 className="App-header">Submission Form</h1>
        <h2 className="App-subtitle">Please fill out the form below</h2>
        <ul>
          <li>
            <ShortAnswerTypeQ question="First name?" />
          </li>
          <li>
            <ShortAnswerTypeQ question="Last name?" />
          </li>
          <li>
            <LongAnswerTypeQ question="Please describe your experience with our company." />
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
            <LinkTypeQ question="Please provide a link to your portfolio." />
          </li>
          <li>
            <DateTypeQ question="When can you start?" />
          </li>
          <li>
            <SelectionTypeQ question="How would you describe your skill level in what fields?" />
          </li>
        </ul>
        <form>
          <button type="submit" className="App-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
