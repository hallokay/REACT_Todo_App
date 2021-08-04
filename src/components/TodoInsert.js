import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState("");
//   value 상태 정의

  const onChange = useCallback((e) => {
    //   인풋에 넣어줄 onchange
    //useCallback 한번 함수를 만들고 재사용 가능
    setValue(e.target.value);
    console.log(e);
  }, []);


  const onSubmit = useCallback(
      e => {
          onInsert(value);
          setValue('');
        //   value 값 초기화

        // submit은 브라우저에서 새로고침을 발생시키므로
        e.preventDefault();
      },
      [onInsert, value],
  )

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
        // 해당 인풋에 무엇이 입력되는가를 추적해주기 때문에 사용
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
