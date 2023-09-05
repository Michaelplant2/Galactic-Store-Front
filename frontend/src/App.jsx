import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {

  return (
    <>
      <div>
        <Header />
        <main className="py-3">
          <Container>
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App