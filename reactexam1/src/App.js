import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "Choi",
//     content: "hello",
//     created_date: new Date().getTime(), // 현재 시간 기준으로 생성됨 millisec단위로
//   },
//   {
//     id: 2,
//     author: "Hyun",
//     content: "world",
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "Uk",
//     content: "Goodbye",
//     created_date: new Date().getTime(),
//   },
// ];
function App() {
  const [data, setData] = useState([]); // data는 빈배열로 시작
  const dataId = useRef(0);
  const onCreate = (author, content) => {
    const created_date = new Date().getTime();

    const newItem = {
      author,
      content,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]); // newItem이 가장 위로 올라오게 만듬 그리고 spread
  }; // 다이어리에 추가할수있는 데이터 저장, author, content값을 받아서 line27의 data에 업데이트 시킴

  const onRemove = (targetId) => {
    console.log(`${targetId} is deleted`);
    const newDiaryList = data.filter((it) => it.id !== targetId); // targetId가 아닌것만 모아서 newDiarylist에 저장
    console.log(newDiaryList);
    setData(newDiaryList); //setData에 넣어주면서 삭제 완료
  }; // app에서 diarylist로 내려주고 diaryitem으로 다시 내려줌,,,
  //onRemove가 수행되면서 state(data)가 바뀜 >> 그게 diaryList{data}를 변화 시킨다.
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate} /> {/* DiaryEditor.js import */}
      <DiaryList onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
