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

        </>
    );
}

export default NavBar;