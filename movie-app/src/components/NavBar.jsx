import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchContext } from '../context/context';

const NavBar = () => {

    const location = useLocation();

    const {searchText, setSearchText } =  useContext(SearchContext);

    let pageName = location.pathname.split('/')[1];

    const hideSearch = [
        "movieDetails",
        "nearbyEvents",
        "ticketQRCode",
        "ticketbooking"
    ].includes(pageName);

    const searchTextHandler = (event) => {
        let searchText = event.target.value.toLowerCase().trim();
        setSearchText(searchText);
    }

    return (
        <>
            <nav className="bg-slate-900 text-white p-2">
                <div className="max-w  
                    px-1 py-1 flex items-center
                    justify-between">
                    <div className="flex items-center gap-8">
                        <Link to='/'
                            className="text-lg font-bold">
                                Movie App
                        </Link>
                    </div>

                    {!hideSearch && <input
                        type="text"
                        value={searchText}
                        placeholder="Search Movies..."
                        onChange={searchTextHandler}
                        className="w-64 rounded-lg p-2 bg-slate-700
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />}
                </div>
            </nav>

        </>
    );
}

export default NavBar;