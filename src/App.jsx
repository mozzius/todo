import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import TextBox from './components/TextBox'
import Todo from './components/Todo'

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: calc(100% - 30px);
    max-width: 500px;
    margin: 10px auto;
`

function App() {
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todo')) || [])

    const deleteTodo = index => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    useEffect(() => {
        window.localStorage.setItem('todo', JSON.stringify(todos))
    })

    return (
        <AppContainer>
            <Container>
                <Header />
                <TextBox onSubmit={todo => {
                    setTodos([{text: todo, time: Date.now()}, ...todos])
                }} />
                {todos.map((todo, index) => {
                    return (
                        <Todo
                            key={todo.time}
                            value={todo.text}
                            deleteTodo={() => deleteTodo(index)}
                        />
                    )
                })}
            </Container>
        </AppContainer>
    )
}

export default App;
