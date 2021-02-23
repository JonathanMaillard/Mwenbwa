import * as React from "react";
import {Popup} from "react-leaflet";

const myPopup = () => {
    const handlePopupOpen = () => {
        console.log("MDR");
    };

    return (
        <Popup onOpen={handlePopupOpen}>
            {"A pretty CSS3 popup."} <br /> {"Easily customizable."}
        </Popup>
    );
};

export default myPopup;
