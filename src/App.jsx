import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import FeaturedProducts from './components/FeaturedProducts'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Header />

      {/* DIVIDER */}
      <div className="b-example-divider"></div>

      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default App