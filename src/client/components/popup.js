import React, {useState} from "react";
import {Popup} from "react-leaflet";
import OwnerSVG from "../../ressources/images/owner.svg";
import InfoSVG from "../../ressources/images/info.svg";
import CommentSVG from "../../ressources/images/comment.svg";
import LoadSVG from "../../ressources/trees-svg/svg/033-larch.svg";

const axios = require("axios");

const MyPopup = ({treeId, sessionInfo}) => {
    const [dataLoaded, setDataLoaded] = useState(false);
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
                console.log(sessionInfo);
                setDataLoaded(true);
                response.data.map(data => {
                    setName(data.nom_complet);

                    if (data.owner) {
                        setOwner(data.username);
                    }

                    const circonf = data.circonf;
                    const height = data.hauteur_totale;
                    const treePrice = Math.ceil(circonf * height);
                    setPrice(treePrice);
                    setPriceLock(treePrice * 10);

                    if (data.comment) {
                        setComment(data.comment);
                    }

                    if (data.locked) {
                        setIsLocked(true);
                    }

                    const treeNameArray = data.nom_complet.split(" ");
                    const treeName = treeNameArray.join("_");
                    setWiki(`https://en.wikipedia.org/wiki/${treeName}`);

                    return "done";
                });
            })
            .catch(e => {
                console.log("sad because :", e);
            });
    };

    const handlePopupClose = () => {
        setDataLoaded(false);
    };

    const BuyTree = () => {
        axios
            .post(`/buyTree`, {
                userId: "6037b898fe778c8f96f2eb36", //user.id venant des cookies
                treeId,
                treePrice: price,
            })
            .then(response => {
                setOwner("username du cookiiiiie session");
                console.log(response);
            })
            .catch(e => {
                console.log("sad because :", e);
            });
    };

    const LockTree = () => {
        axios
            .post(`/lockTree`, {
                userId: "6037b898fe778c8f96f2eb36", //user.id venant des cookies
                treeId,
                treeLockPrice: priceLock,
            })
            .then(response => {
                setOwner("username du cookiiiiie session");
                setIsLocked(true);
                console.log(response);
            })
            .catch(e => {
                console.log("sad because :", e);
            });
    };

    return (
        <Popup onOpen={handlePopupOpen} onClose={handlePopupClose}>
            {!dataLoaded ? (
                <div className={"loader-animation"}>
                    <img src={LoadSVG} />
                </div>
            ) : (
                <div className={"popup"}>
                    <h3 className={"popup__name"}>{name}</h3>
                    <div className={"popup__owner"}>
                        <img
                            src={OwnerSVG}
                            alt={"owner"}
                            className={"popup__owner__img"}
                        />
                        {"Owner : "}
                        <span>{owner}</span>
                    </div>
                    <a
                        className={"popup__link"}
                        href={wiki}
                        target={"_blank"}
                        rel={"noreferrer"}>
                        <img
                            src={InfoSVG}
                            alt={"information"}
                            className={"popup__link__img"}
                        />
                        {"More info on this tree's species"}
                    </a>
                    <div className={"popup__comment"}>
                        <img
                            src={CommentSVG}
                            alt={"comment"}
                            className={"popup__comment__img"}
                        />
                        {"Comment : "}
                        <span>{comment}</span>
                    </div>
                    {/* <SwitchDisplay /> */}

                    {(() => {
                        if (isLocked) {
                            return (
                                <p className={"popup__locked"}>
                                    {"Bouuuuh, This tree is locked"}
                                </p>
                            );
                        }
                        // else if (user.score <= 0) {
                        //     return (<p className={"popup__no-leaves"}>{"You don't have enough leaves !"}</p>)
                        //     // si pas assez d'argent, ne pas afficher les boutons
                        // } else if (user.id === userSession) {
                        //     return (<p className={"popup__tree-yours"}>{"Come on, This tree is already yours..."}</p>)
                        //     // si l'arbre est à l'utlisateur connecté, ne pas afficher les boutons
                        // }
                        return (
                            <div className={"popup__button-container"}>
                                <button
                                    className={"popup__button-container__buy"}
                                    type={"button"}
                                    onClick={BuyTree}>
                                    {"Buy for "}
                                    {price}
                                    {" leaves"}
                                </button>
                                <button
                                    className={"popup__button-container__lock"}
                                    type={"button"}
                                    onClick={LockTree}>
                                    {"Lock for "}
                                    {priceLock}
                                    {" leaves"}
                                </button>
                            </div>
                        );
                    })()}
                </div>
            )}
        </Popup>
    );
};

export default MyPopup;
