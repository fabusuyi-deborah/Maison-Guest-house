import { houseRules } from "../types"

const HouseRules = () => {
  return (
    <section className="mt-12">
  <div className="mb-6">
    <h2 className="font-dm-sans text-lg font-semibold text-terracotta-500">
      House rules
    </h2>

    <p className="mt-1 text-sm text-neutral-600">
      A few things to help everyone enjoy their stay.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
    {houseRules.map((rule) => (
      <div
        key={rule.label}
        className="border-b border-neutral-500 py-4 first:pt-0 sm:py-5"
      >
        <p className="text-sm font-medium text-neutral-800">
          {rule.label}
        </p>

        <p className="mt-1 text-sm text-neutral-500">
          {rule.value}
        </p>
      </div>
    ))}
  </div>
</section>
  )
}

export default HouseRules
