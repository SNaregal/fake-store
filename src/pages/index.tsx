interface IPropsWelcomPage {
    msg?: string
    count?: number
}

const WelComePage = (props: IPropsWelcomPage) => {
    let {msg = "Demo Msg", count= 0 } = props
    return <h1>Welcome {msg} count={count}</h1>
}

export default WelComePage