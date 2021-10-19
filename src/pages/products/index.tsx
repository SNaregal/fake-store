import { FC, useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import {getData} from '../../utils/networkAdapter'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
       <Grid item xs={6} md={4} key={list.id}>
        <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="270"
                image={list.image}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {list.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {list.price}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>

        /*<div className="productHeader col-4" key={list.id}>
        <img src={list.image} className="productImg"></img>
            <div className="container">
                <h4 ><b className="productText">{list.title}</b></h4> 
                <b>{list.price}</b>
            </div>
        </div>*/
        );
    }
    return <ProductPageWrapper>
        <ProductPageHeader>
            <h3>Products Page</h3>
        </ProductPageHeader>
        <ProductsWrapper>
        <ProductCardWrapper>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {listItems}
            </Grid>
        </Box>
            {/*<div className="row">
                {listItems}
            </div>*/}  
        </ProductCardWrapper>
        </ProductsWrapper>
    </ProductPageWrapper>
}

export default Products