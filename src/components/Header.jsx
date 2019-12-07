import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    border-bottom: 8px solid #0070f37a;
    height: 30px;
    display: inline-block;
    padding: 0 5px 0 3px;
`

const Header = () => {
    return <Title>My Todo List</Title>;
}

export default Header;