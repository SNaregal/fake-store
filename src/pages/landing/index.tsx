import {Link} from 'react-router-dom'
import NavBar from '../navbar';

type IPropsWelcomPage  = {
    msg?: string
    count?: number
}

const LandingPage = (props: IPropsWelcomPage) => {
    let {msg = "Demo Msg", count= 0 } = props
    return <>
        <NavBar />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        {/*<NavBar>
            <NavItem>Home</NavItem>
            <NavItem>Home</NavItem>
            <NavItem>Home</NavItem>
            <NavItem><Link to="/products">Products</Link></NavItem>
            <NavItem className="logout">Logout</NavItem>
        </NavBar>*/}
    </>
}

export default LandingPage