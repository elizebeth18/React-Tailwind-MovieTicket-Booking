const NavBar = () => {
    return (
        <>
            <nav className="bg-slate-900 text-white p-2">
                <div className="max-w  px-1 py-1 flex items-center
      justify-between">
                    <div className="flex items-center gap-8">
                        <h1 className="text-lg font-bold">Movie App</h1>
                    </div>

                    <input
                        type="text"
                        placeholder="Search Movies..."
                        className="w-64 rounded-lg 
            p-2  bg-slate-700
            focus:outline-none focus:ring-2
            focus:ring-blue-500"
                    />
                </div>
            </nav>
            <div className="grid grid-cols-3 gap-x-8">
                <div className="bg-amber-400 text-center  p-3">
                    Latest Movies
                </div>
                <div className="bg-amber-400 text-center p-3">
                    Upcoming Movies
                </div>
                <div className="bg-amber-400 text-center p-3">
                    NearBy Events
                </div>
            </div>

        </>
    );
}

export default NavBar;