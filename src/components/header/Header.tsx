import React from 'react'
import { Menu } from './Menu'
import { Navigation } from './Navigation'

import styled from 'styled-components'

const StyledHeader = styled.div`
background-color: #292929;
padding: 5px 0 5px 0; 
display:flex;
justify-content: space-between;
align-items: center;

`

export const  Header:React.FC = ()  =>{
  return (
    <StyledHeader>
        <Menu/>
        <Navigation/>
    </StyledHeader>
  )
}

