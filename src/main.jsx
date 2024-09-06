import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ItemsProvider } from './components/ItemsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ItemsProvider>
    <App />
  </ItemsProvider>
)
