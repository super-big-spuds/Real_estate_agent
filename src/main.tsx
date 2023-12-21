import ReactDOM from 'react-dom/client'
import Routes from './routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
)
