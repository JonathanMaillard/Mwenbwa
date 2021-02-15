import * as React from "react";

const Leaderboard = () => (
    <div className={"leaderboard"}>
        <div className={"leaderboard__content"}>
            <p className={"leaderboard__content__title"}>{"Leaderboard"}</p>
            <div className={"leaderboard__content__subtitle"}>
                <p>{"Here are a top ten of the best players in the game."}</p>
            </div>
            <div className={"leaderboard__content__text"}>
                <ul>
                    <li>
                        <p className={"name"}>{"Bertrand DoZogne"}</p>
                        <p className={"score"}>{"infiniy"}</p>
                    </li>
                    <li>
                        <p className={"name"}>{"Baztien Lafalisse"}</p>
                        <p className={"score"}>{"105 222"}</p>
                    </li>
                    <li>
                        <p className={"name"}>{"Johnhathan Mayard"}</p>
                        <p className={"score"}>{"105 221"}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default Leaderboard;
