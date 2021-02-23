import * as React from "react";
import {
    showRulesModal,
    showDisconnectModal,
    showDashboardModal,
    toggleProfile,
} from "../display/show-modal";

const Profile = () => (
    <div className={"containerProfile"}>
        <button
            type={"button"}
            className={"boxProfile__button"}
            onClick={toggleProfile}>
            <div>
                <span className={"containerToggleWord"} />
                {" profile"}
            </div>
            <i className={"fas fa-chevron-down"} />
        </button>
        <div className={"boxProfile"}>
            <div className={"boxProfile__photo"} />

            <div className={"boxProfile__Info"}>
                <div className={"boxProfile__Info--name"}>
                    {"La Babase (El Crackito)"}
                </div>
                <div className={"boxProfile__Info--button"}>
                    <button type={"button"} onClick={showDashboardModal}>
                        <i className={"fas fa-user"} />
                    </button>
                    <button type={"button"} onClick={showRulesModal}>
                        <i className={"far fa-question-circle"} />
                    </button>
                    <button type={"button"} onClick={showDisconnectModal}>
                        <i className={"fas fa-sign-out-alt"} />
                    </button>
                </div>
            </div>

            <div className={"boxProfile__score"}>
                <div className={"boxProfile__score--leaves"}>
                    <i className={"fas fa-leaf"} />
                    {"5000 leaves"}
                </div>
                <div className={"boxProfile__score--trees"}>
                    <i className={"fas fa-tree"} />
                    {"432 trees"}
                </div>
            </div>
        </div>
    </div>
);

export default Profile;
