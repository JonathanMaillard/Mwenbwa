import * as React from "react";
import {Marker, Popup} from "react-leaflet";
import axios from "axios";

const TreeMarker = () => {
axios
    .get("/trees")
    .then(response => {
        response.data.forEach(tree => {
            // let latitude = tree.y_phi;
            // let longitude = tree.x_lambda;
            console.log(tree);
            return null;
            // return (
            //     <Marker position={[latitude, longitude]}>
            //         <Popup>
            //             {"A pretty CSS3 popup."} <br /> {"Easily customizable."}
            //         </Popup>
            //     </Marker>
            // )

            
        });
    })
    .catch(e => {
        console.log("sad because :", e);
    });
}

export default TreeMarker;