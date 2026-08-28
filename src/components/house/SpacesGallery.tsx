import { spaces } from "../../types";

const SpacesSection = () => {
  const [featuredSpace, ...otherSpaces] = spaces;

  return (
    <section>
      <div className="my-6">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-600">Spaces</p>
        <h2 className="font-fraunces text-md text-neutral-900 mt-1">Explore the spaces you'll have access to.</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        {/* Featured space */}
        <article className="lg:border-r lg:border-neutral-200 lg:pr-8">
          <div className="overflow-hidden rounded-xl">
            <img
              src={featuredSpace.image}
              alt={featuredSpace.name}
              className="h-80 w-full object-cover md:h-105"
            />
          </div>

          <div className="mt-5">
            <h3 className="font-dm-sans text-xl font-semibold text-neutral-800">
              {featuredSpace.name}
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
              {featuredSpace.description}
            </p>
          </div>
        </article>

        {/* Other spaces */}
        <div className="flex flex-col gap-8 lg:gap-6 lg:py-1">
          {otherSpaces.map((space) => (
            <article
              key={space.name}
              className="group flex flex-col lg:flex-row lg:items-center lg:gap-4"
            >
              {/* Image */}
              <div className=" h-80 w-full overflow-hidden rounded-xl lg:h-32 lg:w-48 lg:shrink-0 lg:rounded-lg">
                <img
                  src={space.image}
                  alt={space.name}
                  className=" h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 "
                />
              </div>

              {/* Content */}
              <div className="pt-3 lg:pt-0">
                <h3 className="font-dm-sans font-semibold text-neutral-800">
                  {space.name}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {space.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
