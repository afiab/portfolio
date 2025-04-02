function Header() {
    /* home projs about contact */
    return (
        <div class="header-container">
        <header>

            <div class="header-left">
            <img class="logo" src="./assets/logo.png" alt=""/>
            <h1><a href="index.html">Afia Bidica</a></h1>
            </div>
            <div>
            <nav class="header-right">
                <ul>
                    {/* need to update the links */}
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Projects</a></li>
                <li><a href="index.html">Assets</a></li>
                <li><a href="index.html">Contact</a></li>
                </ul>
            </nav>
            </div>

        </header>
                </div>
    )
}   

export default Header;