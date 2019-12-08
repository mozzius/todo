import React, { useState } from 'react'
import styled from 'styled-components';

const TodoBox = styled.div`
    width: calc(100% - 25px);
    margin: 20px 0;
    padding: 5px 10px;
    border-left: 5px solid #0070f3;
    cursor: pointer;
    transition: all 0.3s ease;
    transition-property: opacity background-color;
    opacity: 1;

    &:hover {
        text-decoration: line-through;
        background-color: #eee;
    }

    &.fadeout {
        opacity: 0;
    }
`

const Todo = ({ value, deleteTodo }) => {
    const [isFading, setFading] = useState(false)

    return (
        <TodoBox className={isFading && 'fadeout'} onClick={() => {
            setFading(true)
            setTimeout(deleteTodo, 300)
        }}>
            {value}
        </TodoBox>
    )
}

export default Todo