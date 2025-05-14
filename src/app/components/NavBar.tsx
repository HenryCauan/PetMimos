const NavBar = () => {
    return (
        <>
            <nav className="w-full h-18 bg-white text-black flex items-center justify-between px-18 relative">
                <div className="flex gap-12">
                    <div className="font-bold">PETMIMOS</div>
                    <div className="flex gap-4">
                        <span>Inicio</span>
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