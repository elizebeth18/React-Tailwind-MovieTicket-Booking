import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../store/movieSlice';
import { searchLatestMovies } from '../store/latestMoviesSlice';

const NavBar = () => {

    const [toggleSearch, setToggleSearch] = useState(true);
    const location = useLocation();
    const dispatch = useDispatch();

    let pageName = location.pathname.split('/')[1];

    useEffect(()=>{
        if(pageName === 'movieDetails' || 
            pageName === 'ticketbooking'){
            setToggleSearch(false)
        }else{
            setToggleSearch(true)
        }
    },[location]);

    const searchTextHandler = (event) => {
        let searchText = event.target.value.toLowerCase().trim();
        
        if(location.pathname === '/latestMovies'){
            dispatch(searchLatestMovies(searchText));
        }else {
            dispatch(searchMovies(searchText));
        }
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

                    {toggleSearch && <input
                        type="text"
                        placeholder="Search Movies..."
                        onChange={searchTextHandler}
                        className="w-64 rounded-lg 
                            p-2  bg-slate-700
                            focus:outline-none focus:ring-2
                         focus:ring-blue-500"
                    />}
                </div>
            </nav>

        </>
    );
}

export default NavBar;