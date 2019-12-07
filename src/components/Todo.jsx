import React from 'react'
import styled from 'styled-components';

const TodoBox = styled.div`
    width: calc(100% - 25px);
    margin: 20px 0;
    padding: 5px 10px;
    border-left: 5px solid #0070f3;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        text-decoration: line-through;
        background-color: #eee;
    }
`

const Todo = ({ value, deleteTodo }) => {

    return (
        <TodoBox onClick={deleteTodo}>
            {value}
        </TodoBox>
    )
}

export default Todo