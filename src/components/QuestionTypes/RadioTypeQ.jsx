function RadioTypeQ(props) {
  return (
    <form className="radio-form">
      <div>
        <p>{props.question}</p>
        <div className="radio-container">
          {props.answers.map((item) => {
            return (
              <div key={item}>
                <input
                  type="radio"
                  id={item}
                  name={{ item } + "type"}
                  value={item}
                  onChange={(e) => {
                    props.onRadioChange(e, props.i);
                  }}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
export default RadioTypeQ;
