import SpacesGallery from "../components/house/SpacesGallery";
import AmenitiesSection from "../components/house/AmenitiesSection";
import HouseRules from "../components/house/HouseRules";

const TheHousePage = () => {
  return (
    <div>
      {/* Page heading */}
      <div className="">
        <p className="font-dm-mono text-sm uppercase tracking-widest text-neutral-600">
          The house
        </p>
        <h1 className="font-fraunces text-4xl text-neutral-900">
          Everything you need,{" "}
          <span className="italic text-terracotta-600">nothing you don't.</span>
        </h1>
      </div>

      {/* Spaces */}

      <SpacesGallery />

      {/* Amenities grid */}
      <AmenitiesSection />

      {/* House rules */}

      <HouseRules />
    </div>
  );
};

export default TheHousePage;
