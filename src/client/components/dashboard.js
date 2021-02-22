import * as React from "react";
import CloseSvg from "../../ressources/images/cancel.svg";
import {hideDashboardModal} from "../display/hide-modal";
import CircleColor from ".././components/color-theme";

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
                <div className={"dash__Photo"}></div>
                <button><i class="far fa-edit"></i><span>change profile picture</span></button>

                </div>

                <div className={"dash__BoxDroite"}>
                    <div className={"dash__NameAndBtn"}>
                        <h2>Bastien le crack</h2>
                        <button><i class="far fa-edit"></i><span>change name</span></button>
                    </div>

                    <div className={"dash__MailAndBtn"}>
                        <h2>Bastienlafalize@gmail.com</h2>
                        <button><i class="far fa-edit"></i><span>change email</span></button>
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