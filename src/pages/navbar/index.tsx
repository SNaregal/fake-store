import {Link} from 'react-router-dom'
import {NavBars,NavItem} from './style'


type IPropsWelcomPage  = {
    msg?: string
    count?: number
}

const NavBar = (props: IPropsWelcomPage) => {
    let {msg = "Demo Msg", count= 0 } = props
    return <>
        <NavBars>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cats">Categories</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li style={{float:'right'}}><a href="#about">Logout</a></li>
            </ul> 
        </NavBars>
    </>
}

export default NavBar