export default function CheckboxTypeQ(props) {
  const j = 0;
  return (
    <form className="checkbox-form">
      <div>
        <p>{props.question}</p>
        <div className="checkbox-container">
          {props.answers.map(function (item) {
            return (
              <div key={item}>
                <input
                  type="checkbox"
                  value={item}
                  id={item}
                  name={item}
                  onChange={(e) => {
                    props.onCheckboxChange(e, props.i);
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
