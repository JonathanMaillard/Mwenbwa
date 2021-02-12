import * as React from "react";

const Rules = () => (
    <div className={"rules"}>
        <div className={"rules__content"}>
            <p className={"rules__content__title"}>{"Rules"}</p>
            <div className={"rules__content__subtitle"}>{"The Game"}</div>
            <div className={"rules__content__text"}>
                <p>
                    {
                        "This is a map of all the trees in Liège. Each tree has a value."
                    }
                </p>
                <p>
                    {
                        "You can buy new trees, or steal trees from other players. Of course, in this case, the price will be higher. When you posses a tree, you can lock it, so other players cannot steal it from you."
                    }
                </p>
            </div>
            <div className={"rules__content__subtitle"}>{"As a Player"}</div>
            <div className={"rules__content__text"}>
                <p>
                    {
                        "You will get a certain amount of leaves, which are your money."
                    }
                </p>
                <p>
                    {
                        "Every 15 minutes, you earn new leaves. The more you posses trees, the more leaves you get. In the same way, every hour, helf of your leaves die."
                    }
                </p>
            </div>
            <div className={"rules__content__subtitle"}>{"General"}</div>
            <div className={"rules__content__text"}>
                <p>
                    {
                        "On the top right of your screen, you can see the Leaderboard, to see each player’s stats. You can also see the Gamelogs, which are the last actions in the whole game."
                    }
                </p>
            </div>
        </div>
    </div>
);

export default Rules;
