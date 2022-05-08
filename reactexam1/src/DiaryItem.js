import React, { useEffect, useRef, useState } from "react";

const DiaryItem = ({ onEdit, onRemove, author, created_date, id, content }) => {
  useEffect(() => {
    console.log(`${id}번째 아이템 렌더`);
  }); // 리렌더 되는 아이템을 출력해보기위해

  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => setIsEdit(!isEdit); //호출되면 원래 isEdit반전(toggle) 시킴

  const [loacalContent, setLocalContent] = useState(content); //textarea handling, usestate에 content를 넣으면 수정버튼 누르면 원본 데이터가 보임

  const loacalContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`Delete ${id}??`)) {
      onRemove(id);
    } //alert와 유사
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content); //수정누르고 글쓰고 취소누르고 다시 수정 누르면 원본데이터만 유지함(글썼던거 없어짐)
  };

  const handleEdit = () => {
    if (loacalContent.length < 5) {
      loacalContentInput.current.focus();
      return;
    }

    if (window.confirm(`Modify ${id}?`)) {
      onEdit(id, loacalContent); // 새로바뀌는 컨텐츠 전달
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span> author : {author}</span>
        <br /> {/** 줄바꿈 */}
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={loacalContentInput}
              value={loacalContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>content</>
        )}
      </div>
      {/* isEdit에 따라 수정 여부 갈림 3항연산자 사용*/}

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>cancel modification</button>
          <button onClick={handleEdit}>complete modification </button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>Delete</button>
          <button onClick={toggleIsEdit}>Modify</button>
        </>
      )}
      {/**수정 상태일때는 버튼이 수정취소, 수정완료가 뜨고 수정중이 아니면 삭제, 수정 버튼 */}
    </div>
  );
};

export default React.memo(DiaryItem);
