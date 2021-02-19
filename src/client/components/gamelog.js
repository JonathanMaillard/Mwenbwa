import * as React from "react";
import GamelogSvg from "../../ressources/images/undraw_history.svg";
import CloseSvg from "../../ressources/images/cancel.svg";
import {hideGamelogModal} from "../display/hide-modal";

const Gamelog = () => (
    <div className={"modal gamelog"}>
        <div className={"gamelog__content"}>
            <p className={"gamelog__content__title"}>{"Gamelog"}</p>
            <div className={"gamelog__content__subtitle"}>
                <p>{"Here are the last actions that happened in the game."}</p>
            </div>
            <div className={"gamelog-history"}>
                <img
                    src={GamelogSvg}
                    alt={"destination"}
                    className={"gamelog-history__img"}
                />
                <ul className={"gamelog-history__list"}>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>{"Jhonhathan "}</span>
                            {"locked the tree named PasDinspi"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>
                                {"Me, The wonderful "}
                            </span>
                            {"bought the tree named Grandiose"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>{"Jhonhathan "}</span>
                            {"bought the tree named PasDinspi"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>
                                {"Me, The wonderful "}
                            </span>
                            {"locked the tree named Grandiose"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>{"Jhonhathan "}</span>
                            {"bought the tree named PasDinspi"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>
                                {"Me, The wonderful "}
                            </span>
                            {"locked the tree named Grandiose"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>{"Jhonhathan "}</span>
                            {"bought the tree named PasDinspi"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>{"Jhonhathan "}</span>
                            {"bought the tree named PasDinspi"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>{"Jhonhathan "}</span>
                            {"bought the tree named PasDinspi"}
                        </p>
                    </li>
                    <li className={"gamelog-history__list__item"}>
                        <p>
                            <span className={"italic"}>{"Jhonhathan "}</span>
                            {"bought the tree named PasDinspi"}
                        </p>
                    </li>
                </ul>
            </div>

            <img //CLOSE BTN
                className={"close-btn"}
                src={CloseSvg}
                alt={"Close"}
                onClick={hideGamelogModal}
            />
        </div>
    </div>
);

export default Gamelog;
