const Header = () => {
    let today = new Date().toLocaleDateString()

    return <header className="header">{today}</header>
}

export default Header