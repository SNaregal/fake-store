import { FC, useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import {getData} from '../../utils/networkAdapter'

import { ProductPageHeader, ProductPageWrapper,ProductCardWrapper, ProductsWrapper } from "./style";

const Products: FC = (props: any) => {
    const [productsList,setProductsList] = useState<AxiosResponse | null>(null);
    useEffect(() => {
        getData('https://fakestoreapi.com/products')
        .then( (res: AxiosResponse) =>  {setProductsList(res)})
        .catch(error => console.error(error)) 
    }, []);
    var listItems = '';
    if(productsList!=null){
        const pmap:any =  productsList.data;
       listItems = pmap.map((list:any) =>
        <div className="productHeader col-4" key={list.id}>
        <img src={list.image} className="productImg"></img>
            <div className="container">
                <h4 ><b className="productText">{list.title}</b></h4> 
                <b>{list.price}</b>
            </div>
        </div>
        );
    }
    return <ProductPageWrapper>
        <ProductPageHeader>
            <h3>Products Page</h3>
        </ProductPageHeader>
        <ProductsWrapper>
        <ProductCardWrapper>
            <div className="row">
                {listItems}
            </div>  
        </ProductCardWrapper>
        </ProductsWrapper>
    </ProductPageWrapper>
}

export default Products