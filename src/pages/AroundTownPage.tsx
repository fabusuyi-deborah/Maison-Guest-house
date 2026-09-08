import Map, { Marker, Popup } from "react-map-gl/maplibre";
import type { MapRef } from "react-map-gl/maplibre";
import { useEffect, useRef, useState } from "react";

export interface OverpassPlace {
  id: number;
  lat: number;
  lon: number;
  tags: {
    name?: string;
    amenity?: string;
    natural?: string;
    [key: string]: string | undefined;
  };
}

const AroundTownPage = () => {
  const [places, setPlaces] = useState<OverpassPlace[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<OverpassPlace | null>(
    null,
  );
  const mapRef = useRef<MapRef>(null);

  const getMarkerColor = (place: OverpassPlace): string => {
    if (place.tags.amenity === "restaurant") return "bg-terracotta-600";
    if (place.tags.amenity === "cafe") return "bg-blue-500";
    if (place.tags.natural === "beach") return "bg-sun-500";
    return "bg-neutral-500";
  };

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const query = `
          [out:json];
          (
            node["amenity"="restaurant"](around:2000,43.21,5.54);
            node["amenity"="cafe"](around:2000,43.21,5.54);
            node["natural"="beach"](around:5000,43.21,5.54);
          );
          out body;
        `;

        const response = await fetch(
          "https://overpass-api.de/api/interpreter",
          {
            method: "POST",
            body: query,
          },
        );
        const data = await response.json();
        const validPlaces = data.elements.filter(
          (place: OverpassPlace) => place.tags?.name,
        );
        setPlaces(validPlaces);
      } catch (error) {
        console.error("Failed to fetch places:", error);
      }
    };
    fetchPlaces();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleSelectPlace = (place: OverpassPlace) => {
    setSelectedPlace(place);
    mapRef.current?.flyTo({ center: [place.lon, place.lat], zoom: 15 });
  };

  return (
    <div>
      <div className="mb-6">
        <p className="font-dm-mono text-xs uppercase tracking-widest text-neutral-600">
          Around town
        </p>
        <h1 className="font-fraunces text-2xl text-neutral-900 mt-1">
          A few of our favorite spots nearby.
        </h1>
      </div>

      {/* Map */}
      <div className="h-125 w-full overflow-hidden rounded-2xl">
        <Map
          ref={mapRef}
          initialViewState={{
            longitude: 5.54,
            latitude: 43.21,
            zoom: 13,
          }}
          mapStyle="https://tiles.openfreemap.org/styles/bright"
        >
          {places.map((place) => (
            <Marker
              key={place.id}
              longitude={place.lon}
              latitude={place.lat}
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                handleSelectPlace(place);
              }}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 border-white cursor-pointer ${getMarkerColor(place)}`}
              />
            </Marker>
          ))}

          {selectedPlace && (
            <Popup
              longitude={selectedPlace.lon}
              latitude={selectedPlace.lat}
              onClose={() => setSelectedPlace(null)}
              closeButton={true}
            >
              <p className="font-dm-sans text-sm font-medium text-neutral-900">
                {selectedPlace.tags.name}
              </p>
              {selectedPlace.tags.amenity && (
                <p className="font-dm-mono text-xs uppercase text-neutral-500 mt-1">
                  {selectedPlace.tags.amenity}
                </p>
              )}
            </Popup>
          )}
        </Map>
      </div>

      {/* Places grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 mt-6">
        {places.map((place) => (
          <button
            key={place.id}
            onClick={() => handleSelectPlace(place)}
            className="text-left rounded-lg p-2 hover:bg-neutral-100 flex items-center gap-2 transition"
          >
            <div
              className={`w-2 h-2 rounded-full shrink-0 ${getMarkerColor(place)}`}
            />
            <p className="font-dm-sans text-sm text-neutral-800 truncate">
              {place.tags.name}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AroundTownPage;
