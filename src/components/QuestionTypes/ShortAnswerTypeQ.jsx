export default function ShortAnswerTypeQ(props) {
  return (
    <form className="short-answer-form">
      <p>{props.question}</p>
      <div className="input-container">
        <input
          type="text"
          id="answer"
          maxLength="30"
          placeholder="Enter your answer here"
        />
      </div>
    </form>
  );
}
