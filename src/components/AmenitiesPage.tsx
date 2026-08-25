import { amenities } from '../types'

const AmenitiesPage = () => {
  return (
    <section className="mt-12">
  <div className="mb-6">
    <h2 className="font-dm-sans text-lg font-semibold text-terracotta-500">
      Amenities
    </h2>

    <p className="mt-1 text-sm text-neutral-600">
      Everything you need for a comfortable stay.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
    {amenities.map((item) => (
      <div
        key={item.label}
        className="flex items-center gap-4 rounded-lg bg-white/50 p-4 transition-colors hover:bg-white"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-terracotta-500">
          <img
            src={item.icon}
            alt=""
            className="size-5"
          />
        </div>

        <p className="font-dm-sans text-sm font-medium text-neutral-800">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</section>
  )
}

export default AmenitiesPage
