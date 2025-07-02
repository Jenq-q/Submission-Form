export default function LinkTypeQ(props) {
  return (
    <form className="link-form">
      <div>
        <p>{props.question}</p>
        <div className="link-container">
          <input
            type="url"
            id="link"
            name="link"
            placeholder="Enter your link here"
            onChange={(e) => {
              props.onAnswerChange(e, props.i);
            }}
          />
        </div>
      </div>
    </form>
  );
}
