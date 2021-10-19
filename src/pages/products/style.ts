import styled from 'styled-components'

export const ProductPageWrapper = styled.div`
    height:100vh;
    width: 100vw;
    background-color: white;
`
export const ProductPageHeader = styled.section`
    background-color: yellow;
    color: violet;
`

export const ProductsWrapper = styled.div`
    background-color: gray;
`

export const ProductCardWrapper = styled.div`
    background-color: #f5f5f0;
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
    
    [class*="col-"] {
        float: left;
        padding: 15px;
    }
    
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}  
    .productHeader{
        max-width: 99% !important;
    }
    .productImg{
        width:100%;
        max-width: 110px;
    }
    .productDetails{

    }
    .container {
      }
    .productText{
        white-space: initial;
    }
`