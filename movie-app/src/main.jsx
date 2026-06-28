import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store/store.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Error from './components/Error';
import LatestMovies from './components/LatestMovies';
import NearByEvents from './components/NearByEvents';
import MovieDetails from './components/MovieDetails';
import TicketBookingForm from './components/Booking';
import TicketQRCode from './components/Booking/TicketQRCode';
import UpcomingMovies from './components/UpcomingMovies';
import './index.css';
import { SearchProvider } from './context/context.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/latestMovies',
        element: <LatestMovies />
      },
      {
        path: '/upcomingMovies',
        element: <UpcomingMovies />
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
], {
    future: {
      v7_startTransition: true,
      // Include other v7 flags you are preparing for here!
    }},);

    store.subscribe(() => {
    console.log(
        "STORE STATE:",
        store.getState()
    );
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </Provider>,
)
