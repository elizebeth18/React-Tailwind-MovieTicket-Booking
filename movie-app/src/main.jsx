import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store/store.jsx';
import './index.css'
import App from './App.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SearchProvider } from './context/context.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SearchProvider>
      <App />
    </SearchProvider>
  </Provider>,
)
