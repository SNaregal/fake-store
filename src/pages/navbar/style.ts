import styled from 'styled-components'

export const NavBar2 = styled.section`
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
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }
          
          li {
            float: left;
            border-right:1px solid #bbb;
          }
          
          li:last-child {
            border-right: none;
          }
          
          li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
          
          li a:hover:not(.active) {
            background-color: #111;
          }
          
          .active {
            background-color: #04AA6D;
          }   }
`
export const NavBars = styled.div`ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
    border-right:1px solid #bbb;
  }
  
  li:last-child {
    border-right: none;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover:not(.active) {
    background-color: #111;
  }
  
  .active {
    background-color: #04AA6D;
  }`