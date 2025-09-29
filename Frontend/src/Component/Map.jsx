import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ latitude, longitude, title }) {
  const center = [51.505, -0.09]; // London
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
        <Popup>Hello from react-leaflet 👋</Popup>
      </Marker>
    </MapContainer>
  );
}
