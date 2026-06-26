import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Error from './components/Error';
import LatestMovies from './components/LatestMovies';
import NearByEvents from './components/NearByEvents';
import MovieDetails from './components/MovieDetails';
import TicketBookingForm from './components/Booking';
import TicketQRCode from './components/Booking/TicketQRCode';

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
        },
        {
          path: '/ticketbooking',
          element: <TicketBookingForm />
        },
        {
          path: '/ticketQRCode',
          element: <TicketQRCode />
        }
      ]
    }
  ])

  return(
    <RouterProvider router={router}/>
  )


}

export default App
