import NavItem from "./NavItem";
function Header() {
    return (
        <header className="flex absolute bg-transparent px-2 md:px-4 2xl:px-20 top-0 z-10 w-full justify-between items-center capitalize font-medium text-base" id="header">
           <nav className="flex  justify-between">
                <h1 className="mx-6 lg:mr-24 font-mono text-lg">MasterBank</h1>
                <ul className="hidden lg:contents block text-lg">
                    <NavItem link="personal" />
                    <NavItem link="business" />
                    <NavItem link="features" />
                    <NavItem link="company" />
                </ul>
           </nav>
            <div className="space-x-2 mx-4 text-sm">
                <button className="capitalize border-[1px] border-gray-400 h-10 w-20 rounded-full">log in</button>
                <button className="capitalize h-10 w-20 rounded-full bg-white text-black">sign up</button>
            </div>
        </header>
    )
}

export default Header;