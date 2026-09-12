import { useState } from "react";
import mapIllustration from "../assets/images/around-town-map.svg"
import { aroundTownPlaces } from "../types";
import type { AroundTownPlace } from "../types";
import { Link } from "react-router-dom";

type Category = "all" | "eat" | "swim" | "walk";

const categoryLabels: Record<Category, string> = {
  all: "All",
  eat: "Eat & drink",
  swim: "Swim",
  walk: "Walk & explore",
};

const categoryColor = (category: AroundTownPlace["category"]): string => {
  if (category === "eat") return "bg-terracotta-600";
  if (category === "swim") return "bg-blue-500";
  return "bg-sun-500";
};

const AroundTownPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedId, setSelectedId] = useState<number | null>(1);

  const filteredPlaces =
    activeCategory === "all"
      ? aroundTownPlaces
      : aroundTownPlaces.filter((place) => place.category === activeCategory);

  return (
    <div className="space-y-6 text-neutral-900">
      <div className="pt-1">
        <p className="font-dm-mono text-sm uppercase tracking-widest text-neutral-600">
          Around town
        </p>
        <h1 className="mt-1 font-fraunces text-3xl text-neutral-900 md:text-4xl">
          Our Cassis, on foot.
        </h1>
        <p className="mt-2 max-w-xl font-dm-sans text-sm leading-relaxed text-neutral-600">
          Every spot below is a place we actually go. Follow the numbers on the
          map — nothing is more than a twenty-minute walk from the front door.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(categoryLabels) as Category[]).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-3 py-1.5 font-dm-sans text-[10px] uppercase tracking-[0.08em] transition ${
              activeCategory === category
                ? "border-neutral-900 bg-neutral-900 text-neutral-50"
                : "border-neutral-300 bg-transparent text-neutral-600 hover:border-terracotta-600 hover:text-terracotta-600"
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden bg-transparent">
        <img
          src={mapIllustration}
          alt="Illustrated map of Cassis"
          className="block h-auto w-full object-cover"
        />

        {filteredPlaces.map((place) => (
          <button
            key={place.id}
            onClick={() => setSelectedId(place.id)}
            style={{ left: `${place.x}%`, top: `${place.y}%` }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-dm-mono font-bold text-neutral-50 shadow-sm transition ${categoryColor(
              place.category,
            )} ${selectedId === place.id ? "scale-125" : ""}`}
          >
            {place.id}
          </button>
        ))}
      </div>

      <div className="pt-1">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-fraunces text-2xl leading-none tracking-tighter text-neutral-900 md:text-[2.4rem]">
            Where the numbers lead
          </h2>
          <span className="font-dm-mono text-[8px] uppercase tracking-[0.18em] text-neutral-500">
            Ask for a table; we’re here everyday.
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filteredPlaces.map((place) => (
            <button
              key={place.id}
              onClick={() => setSelectedId(place.id)}
              className={`rounded-xl border bg-neutral-50 p-4 text-left transition ${
                selectedId === place.id
                  ? "border-terracotta-600 shadow-[0_0_0_1px_rgba(160,77,47,0.25)]"
                  : "border-neutral-200 hover:border-neutral-400"
              }`}
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-dm-mono font-bold text-neutral-50 ${categoryColor(place.category)}`}
                  >
                    {place.id}
                  </span>
                  <h3 className="font-dm-sans text-sm font-semibold text-neutral-900">
                    {place.name}
                  </h3>
                </div>
                <span className="font-dm-mono text-[8px] uppercase tracking-[0.12em] text-neutral-500">
                  {place.walkTime}
                </span>
              </div>
              <p className="font-dm-sans text-sm leading-relaxed text-neutral-600">
                {place.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 rounded-[10px] bg-[#b74729] px-4 py-3 text-neutral-50 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 text-sm">
            ✦
          </span>
          <div>
            <p className="font-dm-sans text-sm font-semibold">
              Want a paper copy?
            </p>
            <p className="font-dm-sans text-[10px] uppercase tracking-[0.14em] text-neutral-100/90">
              There&apos;s a handy version of this map on the console by the
              front door.
            </p>
          </div>
        </div>
        <button className="rounded-full border border-white/70 bg-white/10 px-3 py-1.5 font-dm-sans text-[10px] uppercase tracking-[0.2em] text-neutral-50 transition hover:bg-white/20">
            <Link to="/messages">Message us</Link>
        </button>
      </div>
    </div>
  );
};

export default AroundTownPage;
