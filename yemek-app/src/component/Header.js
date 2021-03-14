import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Wrapper>
           <HeaderContainer>
               <AppName>
               <img src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Food-Dome-512.png"
               alt="siteapp"
               />

                  YemekApp
                </AppName>
                 <SearchBar>
                
                 <input type="text" placeholder="Yemek ve Restotan Ara"/>
                 
                    
                 </SearchBar>
                 <SingInButton>
                   Giriş Yap
                  </SingInButton>
           </HeaderContainer>
        </Wrapper>
    )
}

const Wrapper= styled.div`



`

const HeaderContainer = styled.div`
display : flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
border-bottom:8.5px solid lightgray;



`

const SingInButton = styled.div `
background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
 color: palevioletred;
 margin-right:10px;

  margin: 1.1em 1.1em;
  padding: 0.25em 1em;
  :hover{
      cursor:pointer;
      color:white;
      background-color:palevioletred
        
    }
    

 
  
`

const AppName = styled.div `
font-size:25px;
display:flex;
flex-direction:row;
align-items:center;


img{
    width:40px;
    height:40px;
    margin-right:10px


}


:hover
{
    cursor:pointer
}
`


const SearchBar = styled.div `
 input{
    height:30px;
    width: 260px;
    font-style:center;
    font-size:20px;
    outline:none;
    border:none;
   background-color:lightgray;
   color:black;
   border-radius:5px;
   

 }


`



export default Header




