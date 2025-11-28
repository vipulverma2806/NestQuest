import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function AdminMap({ allListings }) {
  
  const center = [
    23.6345,
    80.6640
  ];//india ka center

  return (
    <MapContainer
      center={center}
      zoom={5}
    //   style={{ height: , width: "100%" }}
      className="rounded-4xl border-2 w-full sm:h-115 border-gray-400 shadow-2xl mt-3 z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
      />

      {allListings.map((loc, index) => (
        <Marker 
          key={index}
          position={[loc.latitude, loc.longitude]}
        >
          <Popup>{`${loc.landmark},  ${loc.city}`}</Popup>
        </Marker>
     ))}
    </MapContainer>
  );
}
