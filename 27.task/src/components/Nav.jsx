const Nav = () => {
    return (
        <nav className="sticky top-0 flex font-[Helvetica] h-16 bg-black text-white p-5 justify-between items-center">
            <div>
                <p className="text-2xl font-extralight">DVSY</p>
            </div>
            <div className="flex gap-5 items-center">
                <a href="#" className="px-2.5 py-1 bg-stone-700 text-1xl rounded-sm text-sm font-normal%">DESIGNERS</a>
                <a href="#" className="px-2.5 py-1 bg-stone-700 text-1xl rounded-sm text-sm font-normal">COLLABS</a>
                <a href="#" className="px-2.5 py-1 bg-stone-700 text-1xl rounded-sm text-sm font-normal">EVENTS</a>
                <a href="#" className="px-2.5 py-1 bg-stone-700 text-1xl rounded-sm text-sm font-normal">BLOG</a>
                <a href="#" className="px-2.5 py-1 bg-stone-700 text-1xl rounded-sm text-sm font-normal">CARD</a>
                <button className="px-3 py-2 bg-orange-600 text-black rounded-sm font-semibold text-sm cursor-pointer hover:bg-orange-700 active:bg-orange-600 transition-all duration-280 ease-in-out">
                    GET IN TOUCH
                </button>
            </div>
        </nav>
    )
}
export default Nav