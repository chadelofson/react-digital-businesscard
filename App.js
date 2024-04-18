import React from 'react'
import Profile from './components/Profile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

export default function App() {
  return (
      <div className="digital-card">
        <Profile />
        <MainContent />
        <Footer />
      </div>
  )  
}