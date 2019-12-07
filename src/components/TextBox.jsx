import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    
`

const Input = styled.input`
    border: none;
    flex-grow: 1;
    background-color: #eee;
    border-radius: 5px 0 0 5px;
    padding: 0 10px;
    transition: box-shadow 0.3s ease;

    &:focus {
        box-shadow: 0 0 5px #eee;
    }
`

const Button = styled.input`
    color: white;
    background-color: #0070f3;
    border: none;
    padding: 10px 20px;
    border-radius: 0 5px 5px 0;
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0 0 3px #0070f3;
    }
`

const TextBox = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    return (
        <Form
            onSubmit={e => {
                e.preventDefault()
                value !== '' && onSubmit(value)
                setValue('')
            }}
        >
            <Input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button
                type="submit"
                value="Add Todo"
            />
        </Form>
    )
}

export default TextBox