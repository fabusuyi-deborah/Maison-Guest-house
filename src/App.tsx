import { Routes, Route } from 'react-router-dom'
import MainLayout from './MainLayout'
import YourStayPage from './pages/YourStayPage'
import TheHousePage from './pages/TheHousePage'
import TheBreakfastPage from './pages/TheBreakfastPage'
import MealDetailPage from './pages/MealDetailPage'
import MessagesPage from './pages/MessagesPage'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<YourStayPage />} />
        <Route path="/the-house" element={<TheHousePage/>} />
        <Route path="/around-town" element={<h1>Around town</h1>} />
        <Route path="/breakfast" element={<TheBreakfastPage/>} />
        <Route path="/breakfast/:id" element={<MealDetailPage/>} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App