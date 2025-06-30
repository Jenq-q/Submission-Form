export default function DateTypeQ(props) {
  return (
    <form class="date-form">
      <div>
        <p>{props.question}</p>
        <div className="date-container">
          <input type="date" id="date" name="date" />
          <label htmlFor="date">Select a date</label>
        </div>
      </div>
    </form>
  );
}
