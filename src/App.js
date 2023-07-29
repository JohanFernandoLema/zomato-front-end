import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Restaurant from './components/Restaurant'
import Search from './components/Search'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/restaurants/:id" element={<Restaurant />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
