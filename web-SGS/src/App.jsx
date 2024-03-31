import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Games, Hero, Navbar,  Details} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}



export default App
