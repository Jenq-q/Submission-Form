export default function SelectionTypeQ(props) {
  return (
    <form>
      <div>
        <p>{props.question}</p>
        <div>
          <select type="select" id="selection" name="selection">
            <optgroup label="Beginner">
              Beginner
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
            </optgroup>
            <optgroup label="Intermediate">
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Python">Python</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="TypeScript">TypeScript</option>
              <option value="GraphQL">GraphQL</option>
              <option value="Docker">Docker</option>
            </optgroup>
          </select>
        </div>
      </div>
    </form>
  );
}
