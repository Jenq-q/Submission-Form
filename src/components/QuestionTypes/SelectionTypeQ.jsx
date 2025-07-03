export default function SelectionTypeQ(props) {
  const categories = props.categories;
  return (
    <form className="selection-form">
      <div>
        <p>{props.question}</p>
        <div className="select-container">
          <select
            type="select"
            id="selection"
            name="selection"
            onChange={(e) => {
              props.onSelectionChange(e, props.i, categories);
            }}
          >
            {props.categories.map(function (item, idx) {
              return (
                <optgroup
                  attribute="data-category"
                  label={item}
                  key={item}
                  value={item}
                >
                  {props.options[idx].map(function (option) {
                    return (
                      <option key={option} value={option} data-category={idx}>
                        {option}
                      </option>
                    );
                  })}
                </optgroup>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
}
