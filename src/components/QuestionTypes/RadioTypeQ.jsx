function RadioTypeQ(props) {
  return (
    <form>
      <div>
        <p>{props.question}</p>
        <div className="radio-container">
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
    </form>
  );
}
export default RadioTypeQ;
