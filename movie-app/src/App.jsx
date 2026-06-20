import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Error from './components/Error';
import LatestMovies from './components/LatestMovies';
import NearByEvents from './components/NearByEvents';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/latestMovies',
          element: <LatestMovies />
        },
        {
          path: '/nearbyEvents',
          element: <NearByEvents />
        }
      ]
    }
  ])

  return(
    <RouterProvider router={router}/>
  )


}

export default App
