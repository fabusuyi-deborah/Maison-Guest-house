import SpacesGallery from '../components/SpacesGallery'
import AmenitiesPage from '../components/AmenitiesPage'
import HouseRules from '../components/HouseRules'

const TheHousePage = () => {
  return (
    <div>
      {/* Page heading, similar spirit to BookingHeader */}
      <div>
        <h1 className='text-terracotta-700 font-dm-sans text-2xl'>THE HOUSE</h1>
        <p className='pt-2 text-neutral-600'>Everything you need, nothing you don't.</p>
      </div>

      {/* Spaces */}
      
      <SpacesGallery />
      
      {/* Amenities grid */}
     <AmenitiesPage />

      {/* House rules */}
     
       <HouseRules /> 
    </div>
  )
}

export default TheHousePage