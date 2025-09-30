import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { listingDataContext } from "../Context/ListingContext";
// import { useContext } from "react";
export default function Map({ latitude, longitude, title }) {
  // let { latitude, longitude } = useContext(listingDataContext);
  const center = [latitude, longitude];
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: 400, width: "100%" }}
      className="rounded-4xl border-2 border-gray-400 shadow-2xl mt-5 z-0 "
    >
      <TileLayer
        // Free OSM tiles
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
      />
      <Marker position={center}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
}
