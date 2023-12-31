
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { FavoritesContextProvider } from './store/favorites-context'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FavoritesContextProvider><BrowserRouter>
    <App />
    </BrowserRouter></FavoritesContextProvider>

)
