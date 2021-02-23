import * as React from "react";
import CloseSvg from "../../ressources/images/cancel.svg";
import {hideDashboardModal} from "../display/hide-modal";
import CircleColor from ".././components/color-theme";

function changeName() {
    document.querySelector(".dashInput").disabled = false;
    document.querySelector(".dashInput").classList.add("inputNameBorder");
    document.querySelector(".dashInputBtn").classList.add("dashInputBtnClick");
}

function changeNameValidation() {
    document.querySelector(".dashInput").disabled = true;
    document.querySelector(".dashInput").classList.remove("inputNameBorder");
    document
        .querySelector(".dashInputBtn")
        .classList.remove("dashInputBtnClick");
}

const dash = () => (
    <div className={"dashContainer"}>
        <div className={"dash__Box"}>
            <div className={"dash__BoxBtn"}>
                <img //CLOSE BTN
                    className={"dashBtn"}
                    src={CloseSvg}
                    alt={"Close"}
                    width={"40"}
                    onClick={hideDashboardModal}
                />
            </div>

            <div className={"dash__BoxContenu"}>
                <div className={"dash__BoxGauche"}>
                    <div className={"dash__Photo"} />
                    <button>
                        <i className={"far fa-edit"} />
                        <span>change profile picture</span>
                    </button>
                </div>

                <div className={"dash__BoxDroite"}>
                    <div className={"dash__NameAndBtn"}>
                        <div className={"dash__InputAndBtn"}>
                            <input
                                className={"dashInput"}
                                disabled={"disabled"}
                                type={"text"}
                            />
                            <button
                                onClick={changeNameValidation}
                                className={"dashInputBtn"}>
                                <i className={"far fa-check-circle"} />
                            </button>
                        </div>
                        <button onClick={changeName}>
                            <i className={"far fa-edit"} />
                            <span>change name</span>
                        </button>
                    </div>

                    <div className={"dash__MailAndBtn"}>
                        <h2>Bastienlafalize@gmail.com</h2>
                    </div>

                    <form className={"dash__Radio"}>
                        <h2>Color Theme</h2>
                        <CircleColor />
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default dash;
