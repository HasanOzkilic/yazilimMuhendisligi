import React from 'react'
import styled from "styled-components"
function Card() {
    return (
        <Wrapper>
        <CardContainer>
        <CardItem>
        <img src="https://cdn.yemek.com/mncrop/313/280/uploads/2016/05/ev-yapimi-hamburger.jpg"
        alt="hamburger"/>
        <div>
        <span>
        Hamburger.
        </span>
        </div>
        
        
        
        </CardItem>
        
        </CardContainer>



        </Wrapper>
        
    )
}

const Wrapper = styled.div`



`

const CardContainer=styled.div`


`

const CardItem = styled.div`

img{
    
    width:140px;
    height:100px;


}
`

export default Card
