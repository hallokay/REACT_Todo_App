import React, { useCallback } from "react";
import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
  // virtualized로 보여지는 부분만 렌더링하기
  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoListItem
        todo={todo}
        key={key}
        onRemove={onRemove}
        onToggle={onToggle}
        style={style}
      />
    );
  }, [onRemove, onToggle, todos]);

  return (
    <List className="TodoList" 
    width={512} //전체크기
    height={513} //전체 높이
    rowCount={todos.length} //항목개수
    rowHeight={57} //항목 높이
    rowRenderer={rowRenderer}
    list={todos} //배열
    style={{outline: 'none'}} //List 에 기본 아웃라인 제거
    />
  
  );
};

export default React.memo(TodoList);
