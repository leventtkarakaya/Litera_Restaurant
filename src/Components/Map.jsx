import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import style from "./Css/Map.module.css";
import "leaflet/dist/leaflet.css";
const locations = [
  {
    id: 1,
    name: "Litera Restaurant / Lounge-Bar",
    address:
      "Tomtom, Literarestaurant, Yeni Çarşı Cd. No:32/6, 34433 Beyoğlu/İstanbul",
    pasition: [41.0329151, 28.978069],
    url: "",
  },
];

function getIcon() {
  return new L.Icon({
    iconUrl:
      "https://cdn-icons-png.freepik.com/512/10239/10239486.png?ga=GA1.1.1316012144.1716721314",
    iconSize: [35, 31],
    iconAnchor: [12, 40],
    popupAnchor: [6, -41],
  });
}
export default function Map() {
  return (
    <>
      <h1 className={style.container__title} id="map">
        MAP
      </h1>
      <section id="map" className={style.container}>
        <MapContainer
          center={[41.0329151, 28.978069]}
          zoom={15}
          zoomControl={true}
          className={style.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location, index) => (
            <Marker
              position={location.pasition}
              key={index}
              icon={getIcon()}
              opacity={0.8}
            >
              <Popup>
                <div>
                  <h2>{location.name}</h2>
                  <p>{location.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </>
  );
}
