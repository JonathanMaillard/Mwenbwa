import * as React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {divIcon} from "leaflet";
import ReactDOMServer from "react-dom/server";
import MySVG from "../../ressources/images/cancel.svg";

const Map = () => (
    <MapContainer center={[50.62571, 5.56878]} zoom={15}>
        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />

        <Marker position={[50.62571, 5.56878]}>
        </Marker>


    </MapContainer>
);

export default Map;
