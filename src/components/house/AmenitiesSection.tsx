import { amenities } from "../../types";

const AmenitiesPage = () => {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="font-dm-mono text-xs uppercase tracking-widest text-neutral-600">
          Amenities
        </h2>

        <p className="font-fraunces text-md text-neutral-900 mt-1">
          Everything you need for a comfortable stay.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
        {amenities.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3"
          >
            <div className={`flex size-9 shrink-0 items-center justify-center rounded-md ${item.iconBg}`}>
              <img src={item.icon} alt="" className="size-4" />
            </div>

            <p className="font-dm-sans text-sm font-medium text-neutral-800">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesPage;
