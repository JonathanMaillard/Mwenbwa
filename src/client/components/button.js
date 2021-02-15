import * as React from "react";

const Button = () => (
    <div className={"containerButton"}>
        <div className={"boxButton"}>
            <button type={"button"} className={"boxButton--Gamelog"}>
                {"Gamelog"}
            </button>
            <button type={"button"} className={"boxButton--LeaderBoard"}>
                {"LeaderBoard"}
            </button>
        </div>
    </div>
);

export default Button;
