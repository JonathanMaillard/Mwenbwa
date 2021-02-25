import React, {useState} from "react";
import {Popup} from "react-leaflet";

const axios = require("axios");

const MyPopup = ({treeId}) => {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("No one owns this tree yet !");
    const [price, setPrice] = useState(0);
    const [priceLock, setPriceLock] = useState(0);
    const [comment, setComment] = useState("No comment yet !");
    const [isLocked, setIsLocked] = useState(false);
    const [wiki, setWiki] = useState("");

    const handlePopupOpen = () => {
        axios
            .get(`/tree/${treeId}`)
            .then(response => {
                //whatever you want to do with datas

                response.data.map(data => {
                    setName(data.nom_complet);

                    if (data.owner) {
                        setOwner(data.owner);
                    };

                    let circonf = data.circonf;
                    let height = data.hauteur_totale;
                    let treePrice = Math.ceil(circonf * height);
                    setPrice(treePrice);
                    setPriceLock(treePrice*10);

                    if (data.comment) {
                        setComment(data.comment);
                    };

                    if (data.locked) {
                        setIsLocked(true);
                    };

                    let treeNameArray = data.nom_complet.split(" ");
                    let treeName = treeNameArray.join("_");
                    setWiki(`https://en.wikipedia.org/wiki/${treeName}`);

                    return "done";
                });
            })
            .catch(e => {
                console.log("sad because :", e);
            });
    };

    const BuyTree = () => {
        axios
            .post(`/buyTree`, {
                "userId": "6037b898fe778c8f96f2eb36",
                "treeId": treeId,
                "treePrice": price,
            })
            .then(response => {
                setOwner("user.username");
            })
            .catch(e => {
                console.log("sad because :", e);
            });
    }

    const LockTree = () => {
        axios
            .post(`/lockTree`, {
                "userId": "6037b898fe778c8f96f2eb36",
                "treeId": treeId,
                "treeLockPrice": priceLock,
            })
            .then(response => {
                setOwner("user.username");
                setIsLocked(true);
                console.log(response, "je sais pas")
            })
            .catch(e => {
                console.log("sad because :", e);
            });
    }

    return (
        <Popup onOpen={handlePopupOpen}>
            <div className={"popup"}>
                <h3>{name}</h3>
                <p>{"Owner : "}<span>{owner}</span></p>
                <a href={wiki} target={"_blank"} rel={"noreferrer"}>{"More info on this tree's species"}</a>
                <p>{"Comment : "}<span>{comment}</span></p>

                {/* FAIRE UN SWITCH POUR TOUS LES CAS POSSIBLES (ARBRE LOCK, PAS ASSEZ D'ARGENT, OU ARBRE DÉJÀ À NOUS, OU AUCUN DES CAS DONC AFFICHER LES BOUTONS) */}
                {isLocked ? (
                    <p>{"Locked"}</p>
                ) : (
                    <>
                    <button type={"button"} onClick={BuyTree}>{"Buy for "}{price}{" leaves"}</button>
                    <button type={"button"} onClick={LockTree}>{"Lock for "}{priceLock}{" leaves"}</button>
                    </>
                )}
            </div>
        </Popup>
    );
};

export default MyPopup;
