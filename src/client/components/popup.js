import React, {useState} from "react";
import {Popup} from "react-leaflet";

const axios = require("axios");

const MyPopup = ({treeId}) => {
    const [name, setName] = useState("");

    const handlePopupOpen = () => {
        axios
            .get(`/tree/${treeId}`)
            .then(response => {
                //whatever you want to do with datas

                response.data.map(data => {
                    setName(data.nom_complet);
                    return "done";
                });
            })
            .catch(e => {
                console.log("sad because :", e);
            });
    };

    return (
        <Popup onOpen={handlePopupOpen}>
            <div className={"popup"}>
                <h3>{name}</h3>
                <p>{treeId}</p>
            </div>
        </Popup>
    );
};

export default MyPopup;
