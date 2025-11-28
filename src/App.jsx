import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Events from './components/Events'
import RegisterModal from './components/RegisterModal'
import Footer from './components/Footer'
import './style.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Header />
      <Hero openModal={openModal} />
      <Events openModal={openModal} />
      <RegisterModal isOpen={modalOpen} closeModal={closeModal} />
      <Footer />
    </>
  )
}

export default App