export default function DateTypeQ(props) {
  return (
    <form class="date-form">
      <div>
        <p>{props.question}</p>
        <div>
          <div>
            <input type="date" id="date" name="date" />
            <label htmlFor="date">Select a date</label>
          </div>
        </div>
      </div>
    </form>
  );
}
