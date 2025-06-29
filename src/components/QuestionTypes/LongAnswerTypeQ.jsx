export default function LongAnswerTypeQ(props) {
  return (
    <form class="long-answer-form">
      <p>{props.question}</p>
      <p>
        <input type="text" id="answer" />
      </p>
    </form>
  );
}
