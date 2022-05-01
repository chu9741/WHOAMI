import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const [state, setState] = useState({ author: "", content: "" });

  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }; /** state를 unpacking하고, name:value형식도 추가 */

  const authorInput = useRef();
  const contentInput = useRef();

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus(); // ref의 현재 가리키는 값이 authorinput tag가 되고 이게 focus됨
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content);
    //console.log(state); // 저장한 diary가 출력

    setState({ author: "", content: "" }); //일기 저장 후 초기화
  };

  return (
    <div classname="DiaryEditor">
      <h2>today diary</h2>
      <div>
        <input
          ref={authorInput} // 이 ref obj를 통해 input tag에 접근
          value={state.author}
          onChange={handleChangeState}
          name="author"
          placeholder="작성자"
          type="text"
        />
        {/** input값 넣기 value 에 AUTHOR 넣고 onchange에 event가 실행되면 콜백함수 setauthor실행 */}
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          onChange={handleChangeState}
          name="content"
          placeholder="texting_area"
          type="text"
        />
      </div>
      <div>
        <button onClick={handleSubmit}> save </button>
      </div>
    </div>
  );
};
export default DiaryEditor;
