import { Routes, Route } from 'react-router-dom'
import MainLayout from './MainLayout'
import YourStayPage from './pages/YourStayPage'
import TheHousePage from './pages/TheHousePage'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<YourStayPage />} />
        <Route path="/the-house" element={<TheHousePage/>} />
        <Route path="/around-town" element={<h1>Around town</h1>} />
        <Route path="/breakfast" element={<h1>The breakfast</h1>} />
        <Route path="/messages" element={<h1>The messages</h1>} />
      </Routes>
    </MainLayout>
  )
}

export default App