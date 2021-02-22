import * as React from "react";
import SignSVG from "../../ressources/images/undraw_nature.svg";
import {showSignIn, showSignUp} from "../display/show-sign-form";
import {hideSignForm} from "../display/hide-sign-form";

const Sign = () => (
    <div className={"sign"}>
        <div className={"sign__content"}>
            <div className={"sign__content__title"}>
                <button
                    className={"sign-up-btn sign-btn-checked"}
                    type={"button"}
                    onClick={showSignUp}>
                    {"Sign Up"}
                </button>
                <button
                    className={"sign-in-btn"}
                    type={"button"}
                    onClick={showSignIn}>
                    {"Sign In"}
                </button>
            </div>

            <div className={"sign-up sign-active"}>
                <img className={"sign-up__img"} src={SignSVG} alt={"Sign up"} />
                <form action={"????????"} className={"sign-up__form"}>
                    <label htmlFor={"userimg"} className={"sign-up__form__img"}>
                        {"Profile picture:"}
                        <div className={"preview"}>
                            <span className={"choose-txt"}>
                                {"Choose a file"}
                            </span>
                        </div>
                        <input
                            className={"file-input"}
                            type={"file"}
                            accept={"image/*"}
                            name={"userimg"}
                        />
                    </label>

                    <div className={"sign-up__form__name"}>
                        <label htmlFor={"username"} className={"label"}>
                            {"Username:"}
                        </label>
                        <input type={"text"} name={"username"} />
                    </div>

                    <div className={"sign-up__form__email"}>
                        <label htmlFor={"useremail"} className={"label"}>
                            {"Email adress:"}
                        </label>
                        <input type={"email"} name={"useremail"} />
                    </div>

                    <div className={"sign-up__form__pwd"}>
                        <label htmlFor={"usepwd"} className={"label"}>
                            {"Password:"}
                        </label>
                        <input type={"password"} name={"userpwd"} />
                    </div>

                    <div className={"sign-up__form__color"}>
                        <label htmlFor={"colortheme"} className={"label"}>
                            {"Color theme:"}
                        </label>
                    </div>

                    <input
                        className={"sign-up__form__btn"}
                        type={"submit"}
                        value={"Sign Up"}
                        onClick={hideSignForm}
                    />
                </form>
            </div>

            <div className={"sign-in"}>
                <img className={"sign-in__img"} src={SignSVG} alt={"Sign up"} />
                <form action={"????????"} className={"sign-in__form"}>
                    <div className={"sign-in__form__name"}>
                        <label htmlFor={"username"} className={"label"}>
                            {"Username:"}
                        </label>
                        <input type={"text"} name={"username"} />
                    </div>

                    <div className={"sign-in__form__pwd"}>
                        <label htmlFor={"usepwd"} className={"label"}>
                            {"Password:"}
                        </label>
                        <input type={"password"} name={"userpwd"} />
                    </div>

                    <input
                        className={"sign-in__form__btn"}
                        type={"submit"}
                        value={"Sign In"}
                        onClick={hideSignForm}
                    />
                </form>
            </div>
        </div>
    </div>
);

export default Sign;
