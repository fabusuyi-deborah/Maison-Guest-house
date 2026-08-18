const BookingHeader = () => {
  return (
    <div className="md:flex justify-between">
      <div className="mb-2">
      <p className="font-dm-mono text-sm text-neutral-600">BOOKING · CONFIRMED</p>
      <h2 className="font-fraunces text-3xl md:text-4xl text-neutral-900">Bienvenue,<span className="italic text-terracotta-600"> Lucia.</span>
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <button className=" text-xs md:text-sm text-neutral-900 border border-neutral-600 px-5 py-2 rounded-full">Print receipt</button>
        <button className="text-xs md:text-sm bg-neutral-900 text-neutral-50  px-5 py-2 rounded-full">Add to calendar</button>
      </div>
    </div>
  )
}

export default BookingHeader;
