export default function CheckboxTypeQ(props) {
  return (
    <form>
      <div>
        <p>{props.question}</p>
        <div className="checkbox-container">
          <div>
            <input type="checkbox" id="math" value="math" name="subject" />
            <label htmlFor="math">Math</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="science"
              value="science"
              name="subject"
            />
            <label htmlFor="science">Science</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="english"
              value="english"
              name="subject"
            />
            <label htmlFor="english">English</label>
          </div>
        </div>
      </div>
    </form>
  );
}
