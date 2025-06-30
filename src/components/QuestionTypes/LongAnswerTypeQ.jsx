export default function LongAnswerTypeQ(props) {
  return (
    <form className="long-answer-form">
      <p>{props.question}</p>
      <div className="input-container">
        <input type="text" id="answer" placeholder="Enter your answer here" />
      </div>
    </form>
  );
}
