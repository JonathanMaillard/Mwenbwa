import * as React from "react";

const Profile = () => (
    <div className={"containerProfile"}>
        <button type={"button"} className={"boxProfile__button"}>
            {"Hide profile"}
            <i className={"fas fa-chevron-down"} />
        </button>
        <div className={"boxProfile"}>
            <div className={"boxProfile__photo"} />

            <div className={"boxProfile__Info"}>
                <div className={"boxProfile__Info--name"}>
                    {"La Babase (El Crackito)"}
                </div>
                <div className={"boxProfile__Info--button"}>
                    <button type={"button"}>
                        <i className={"fas fa-user"} />
                    </button>
                    <button type={"button"}>
                        <i className={"far fa-question-circle"}></i>
                    </button>
                    <button type={"button"}>
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
