import * as React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";

const Map = () => (
    <MapContainer center={[50.62571, 5.56878]} zoom={15}>
        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />

        <Marker position={[50.62571, 5.56878]}>
        </Marker>


    </MapContainer>
);

export default Map;
