import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Error from './components/Error';
import LatestMovies from './components/LatestMovies';
import NearByEvents from './components/NearByEvents';
import MovieDetails from './components/MovieDetails';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: '/',
          element: <Home />
        },
        {
          path: '/latestMovies',
          element: <LatestMovies />
        },
        {
          path: '/nearbyEvents',
          element: <NearByEvents />
        },
        {
          path: '/movieDetails/:movieId',
          element: <MovieDetails />
        }
      ]
    }
  ])

  return(
    <RouterProvider router={router}/>
  )


}

export default App
