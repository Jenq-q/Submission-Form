export default function UploadTypeQ(props) {
  return (
    <form className="upload-form">
      <div>
        <p>{props.question}</p>
        <div>
          <div>
            <input
              type="file"
              id="fileUpload"
              name="fileUpload"
              accept=".pdf, .doc, .docx, .txt"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
