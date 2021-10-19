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
    useEffect(() => {
        getData('https://fakestoreapi.com/products/categories')
        .then( (res: AxiosResponse) =>  {setcatList(res)})
        .catch(error => console.error(error)) 
    }, []);
    var listItems = '';
    if(catList!=null){
        const pmap:any =  catList.data;
       listItems = pmap.map((list:any) =>
            <li>
                {list}
            </li>
       );
    }
    return <>
        <NavBar />
        <h3>Categorys</h3>
        <ul>
            {listItems}
        </ul>
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