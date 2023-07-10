import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header title="Welcome to out Website"/>
      <Content />
      <Footer />
    </div>
  )
}

export default App