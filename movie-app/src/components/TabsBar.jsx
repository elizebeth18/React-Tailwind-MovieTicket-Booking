const TabsBar = () => {
    return (
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
    );
}

export default TabsBar;