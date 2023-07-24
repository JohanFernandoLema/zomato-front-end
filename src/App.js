import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Restaurant from './components/Restaurant'
import Search from './components/Search'

function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/restaurants" element={<Restaurant />} />
        </Routes>
      </main>
    </>
  )
}

export default App
