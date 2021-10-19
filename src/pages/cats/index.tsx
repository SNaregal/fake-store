import { FC, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { AxiosResponse } from "axios";
import {getData} from '../../utils/networkAdapter';
import NavBar from '../navbar';
type IPropsWelcomPage  = {
    msg?: string
    count?: number
}

const Cats = (props: IPropsWelcomPage) => {
    let {msg = "Demo Msg", count= 0 } = props
    const [catList,setcatList] = useState<AxiosResponse | null>(null);
    const [catDet,setcatDet] = useState<AxiosResponse | null>(null);
    useEffect(() => {
        getData('https://fakestoreapi.com/products/categories')
        .then( (res: AxiosResponse) =>  {setcatList(res)})
        .catch(error => console.error(error)) 
    }, []);
    var getCat = (catname: string): any => {  
        getData('https://fakestoreapi.com/products/category/'+catname)
        .then( (res: AxiosResponse) =>  {setcatDet(res)})
        .catch(error => console.error(error))
    }  
    var catItems  = '';
    var listItems = '';
    useEffect(() => {
        if(catDet!=null){
            const pmap:any =  catDet.data;
            catItems = pmap.map((list:any) =>
                <p key={list.id}>
                    {list.title}
                    {list.price}
                </p>
        );
        }
    },[catDet]);
    if(catList!=null){
        const pmap:any =  catList.data;
        listItems = pmap.map((list:any,index:number) =>
            <li key={index}>
                <button onClick={() => getCat(list)}>{list}</button>
            </li>
       );
    }
    return <>
        <NavBar />
        <h3>Categorys</h3>
        <ul>
            {listItems}
        </ul>
        {catItems}
        {/*<NavBar>
            <NavItem>Home</NavItem>
            <NavItem>Home</NavItem>
            <NavItem>Home</NavItem>
            <NavItem><Link to="/products">Products</Link></NavItem>
            <NavItem className="logout">Logout</NavItem>
        </NavBar>*/}
    </>
}

export default Cats