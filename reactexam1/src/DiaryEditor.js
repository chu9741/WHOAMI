import { useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("name");
  const [content, setContent] = useState("");

  return (
    <div classname="DiaryEditor">
      <h2>today diary</h2>
      <div>
        <input
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            console.log({ content });
          }}
        />
      </div>
    </div>
  );
};
export default DiaryEditor;
