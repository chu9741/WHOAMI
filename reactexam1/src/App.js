import { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const App = () => {
  const [data, setData] = useState([]); // data는 빈배열로 시작

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime() + 1,
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content) => {
    const created_date = new Date().getTime();

    const newItem = {
      author,
      content,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]); // newItem이 가장 위로 올라오게 만듬 그리고 spread
  }, []); // 다이어리에 추가할수있는 데이터 저장, author, content값을 받아서 line27의 data에 업데이트 시킴

  const onRemove = useCallback((targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId); // targetId가 아닌것만 모아서 newDiarylist에 저장
    setData(newDiaryList); //setData에 넣어주면서 삭제 완료
  }, []); // app에서 diarylist로 내려주고 diaryitem으로 다시 내려줌,,,
  //onRemove가 수행되면서 state(data)가 바뀜 >> 그게 diaryList{data}를 변화 시킨다.

  const onEdit = useCallback((targetId, newContent) => {
    //수정할 데이터와 ID, 이 함수는 수정폼을 갖고있는 DiaryItem이 호출해야됨
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);

  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate} /> {/* DiaryEditor.js import */}
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;
