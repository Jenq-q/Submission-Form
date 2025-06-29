export default function ShortAnswerTypeQ(props) {
  return (
    <form class="short-answer-form">
      <p>{props.question}</p>
      <p>
        <input type="text" id="answer" maxLength="30" />
      </p>
    </form>
  );
}
