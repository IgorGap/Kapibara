import { Route, Routes } from 'react-router-dom'
import { MyNavbar, Basket, HomeImage, Catalog } from './components'

function App() {
  return (
    <>
    <MyNavbar />
      <Routes>
        <Route path="/" element={<HomeImage />} />
        <Route path="/catalog" element={<Catalog />} />\
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  )
}

export default App
