import * as React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import axios from "axios";
// import {divIcon} from "leaflet";
// import ReactDOMServer from "react-dom/server";
// import MySVG from "../../ressources/images/cancel.svg";

const Map = () => {
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

    axios
        .get("/trees")
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log("sad because :", e);
        });

    return (
        <MapContainer center={[50.62571, 5.56878]} zoom={15}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Marker position={[50.62571, 5.56878]}>
                <Popup>
                    {"A pretty CSS3 popup."} <br /> {"Easily customizable."}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
