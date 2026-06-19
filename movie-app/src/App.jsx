import { createBrowserRouter, RouteProvider } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />
    }
  ])

  return(
    <RouteProvider router={router}/>
  )


}

export default App
