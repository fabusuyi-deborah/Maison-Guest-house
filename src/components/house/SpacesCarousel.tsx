import useEmblaCarousel from 'embla-carousel-react'
import { spaces } from "../../types"

const SpacesCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {spaces.map((space) => (
          <div key={space.name} className="flex-[0_0_85%] min-w-0">
            <div className="overflow-hidden rounded-xl">
              <img src={space.image} alt={space.name} className="h-56 w-full object-cover" />
            </div>
            <h3 className="font-dm-sans font-semibold text-neutral-800 mt-3">{space.name}</h3>
            <p className="mt-1 text-sm text-neutral-600">{space.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpacesCarousel