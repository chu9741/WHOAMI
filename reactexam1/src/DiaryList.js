import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2> Diarylist </h2>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
}; // default값을 설정 혹시 diaryList값이 undefined으로 app에 전달될때 오류 안던지게 handling

export default DiaryList;

// list가 unique 키 값을 가져야 할수도 있음 => 키값을 설정해줘야함 => map같은거 할때 필요
