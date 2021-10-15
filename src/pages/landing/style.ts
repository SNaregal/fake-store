import styled from 'styled-components'

export const NavBar = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rosybrown;
    height: 50px;
    .logout{
        margin-left: auto;
        color: red;
        margin-right: 10px;
    }
`
export const NavItem = styled.span`
    height: 80%;
    width: min-content;
    color: black;
    margin-left: 5px;
    margin-right: 5px;
    &:hover{
        background-color: black;
        color: white;
    }
`