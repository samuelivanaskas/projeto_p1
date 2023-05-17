import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { Globalcss } from './styles'

import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <Globalcss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
