export default function LinkTypeQ(props) {
  return (
    <form class="link-form">
      <div>
        <p>{props.question}</p>
        <div>
          <input
            type="url"
            id="link"
            name="link"
            placeholder="Enter your link here"
          />
        </div>
      </div>
    </form>
  );
}
