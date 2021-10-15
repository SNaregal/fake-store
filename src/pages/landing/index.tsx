import {NavBar,NavItem} from './style'


type IPropsWelcomPage  = {
    msg?: string
    count?: number
}

const LandingPage = (props: IPropsWelcomPage) => {
    let {msg = "Demo Msg", count= 0 } = props
    return <>
        <NavBar>
            <NavItem>Home</NavItem>
            <NavItem>Home</NavItem>
            <NavItem>Home</NavItem>
            <NavItem>Home</NavItem>
            <NavItem className="logout">Logout</NavItem>
        </NavBar>
    </>
}

export default LandingPage