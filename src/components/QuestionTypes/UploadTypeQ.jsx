export default function UploadTypeQ(props) {
  return (
    <form className="upload-form">
      <div>
        <p>{props.question}</p>
        <div className="file-upload-container">
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            accept=".pdf, .doc, .docx, .txt"
          />
          <label htmlFor="fileUpload">Upload File</label>
        </div>
      </div>
    </form>
  );
}
