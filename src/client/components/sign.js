import * as React from "react";

const Sign = () => (
    <div className={"sign"}>
        <div className={"sign__content"}>
            <div className={"sign__content__title"}>
                <button className={"sign-up-btn"} type={"button"}>
                    {"Sign Up"}
                </button>
                <button className={"sign-in-btn"} type={"button"}>
                    {"Sign In"}
                </button>
            </div>

            <div className={"sign__content__sign-up"}>
                <form action={"????????"}>
                    <label htmlFor={"userimg"}>{"Profile picture:"}</label>
                    <br />
                    <input
                        type={"file"}
                        accept={"image/*"}
                        id={"userimg"}
                        name={"userimg"}
                    />
                    <br />

                    <label htmlFor={"username"}>{"Username:"}</label>
                    <br />
                    <input type={"text"} id={"username"} name={"username"} />
                    <br />

                    <label htmlFor={"useremail"}>{"Email adress:"}</label>
                    <br />
                    <input type={"email"} id={"useremail"} name={"useremail"} />
                    <br />

                    <label htmlFor={"colortheme"}>{"Color theme:"}</label>
                    <br />
                </form>
            </div>
            <div className={"sign__content__sign-in"} />
        </div>
    </div>
);

export default Sign;
