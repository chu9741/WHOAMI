import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "Choi",
    content: "hello",
    created_date: new Date().getTime(), // 현재 시간 기준으로 생성됨 millisec단위로
  },
  {
    id: 2,
    author: "Hyun",
    content: "world",
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "Uk",
    content: "Goodbye",
    created_date: new Date().getTime(),
  },
];
const App = () => {
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor /> {/* DiaryEditor.js import */}
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
