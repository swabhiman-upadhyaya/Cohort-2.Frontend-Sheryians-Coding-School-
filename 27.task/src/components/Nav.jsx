const Nav = () => {
    return (
        <nav>
            <div className="logo">Bazil<span>.</span></div>

            <div className="nav-links">
                <a href="#">Design</a>
                <a href="#">Photos</a>
                <a href="#">About</a>

                <div className="lang">
                    <a href="#">FR</a>
                    <a href="#">EN</a>
                </div>

                <button className="email">hello@bazil.fr</button>
            </div>
        </nav>
    )
}

export default Nav