import MainLayout from './MainLayout'
import BookingHeader from './components/BookingHeader'
import Hero from './components/Hero'
import InfoCardsSection from './components/InfoCardsSection'

function App() {
  return (
    <MainLayout>
      <BookingHeader />
      <Hero />
      <InfoCardsSection />
    </MainLayout>
  )
}

export default App