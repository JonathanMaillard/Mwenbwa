import * as React from "react";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import {myPopup} from "./popup";
// import {divIcon} from "leaflet";
// import ReactDOMServer from "react-dom/server";
// import MySVG from "../../ressources/images/cancel.svg";

const Map = () => (
    // const treesIcon = () => {
    //     divIcon(
    //         {
    //             html: <img src="../../ressources/images/cancel.svg" alt=""/>
    //         }
    //     )
    // }
    // const iconMarkup = ReactDOMServer.renderToString(<svg />);
    // const customMarkerIcon = divIcon({
    //     html: ReactDOMServer.renderToString(
    //         <div className={"icon"}>
    //             <MySVG />
    //         </div>,
    //     ),
    // });

    <MapContainer center={[50.62571, 5.56878]} zoom={15}>
        <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />

        <Marker position={[50.62571, 5.56878]}>
            <myPopup />
        </Marker>
    </MapContainer>
);
export default Map;
