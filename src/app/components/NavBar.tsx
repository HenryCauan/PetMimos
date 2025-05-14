const NavBar = () => {
    return (
        <>
            <nav className="w-full h-22 bg-white text-black flex items-center justify-between px-18 relative" id="nav">
                <div className="flex gap-12 items-center">
                    <div className="text-2xl" id="logo">PETMIMOS</div>
                    <div className="flex gap-4 font-normal">
                        <span>Home</span>
                        <span>Services</span>
                        <span>Contact</span>
                        <span>Produtos</span>
                    </div>
                </div>
                <div>
                    <button className="px-4 py-2 bg-blue-700 rounded-3xl text-white">Contact us</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar;