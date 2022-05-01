const DiaryItem = ({ onDelete, author, created_date, id, content }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span> author : {author}</span>
        <br /> {/** 줄바꿈 */}
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content"> {content}</div>
      <button
        onClick={() => {
          if (window.confirm(`Delete ${id}??`)) {
            onDelete(id);
          } //alert와 유사
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DiaryItem;
