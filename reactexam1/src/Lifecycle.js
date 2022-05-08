import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  //   useEffect(() => {
  //     console.log("mount"); // mount 되는 시점 컨트롤
  //   }, []);

  //   useEffect(() => {
  //     console.log("update"); // update 되는 시점 컨트롤
  //   });

  //   useEffect(() => {
  //     console.log(`count is update : ${count}`);
  //     if (count > 5) {
  //       setCount(1);
  //     }
  //   }, [count]);
  //   useEffect(() => {
  //     console.log(`text is update : ${text}`);
  //   }, [text]);
  const [isVisible, setIsVisivle] = useState(false);
  const toggle = () => setIsVisivle(!isVisible);
  const UnmountTest = () => {
    useEffect(() => {
      console.log("mount"); //toggle됨에 따라 unmounttest가 실행됨
      return () => {
        console.log("unmount"); //unmount시 실행됨
      };
    }, []);
    return <div>unmount testing</div>;
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}> on/off </button>
      {isVisible && <UnmountTest />}
      {/**뒤에 있는 거에 따라 행위가 결정됨
       *  unmounttest가 true면 return으로
       * unmountest가 되어서 렌더링됨 */}
      <div></div>
    </div>
  );
};

export default Lifecycle;
