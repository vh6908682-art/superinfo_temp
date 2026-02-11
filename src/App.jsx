import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import GlobalPresence from './components/GlobalPresence'
import Products from './components/Products'
import Quality from './components/Quality'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <GlobalPresence />
        <Products />
        <Quality />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
