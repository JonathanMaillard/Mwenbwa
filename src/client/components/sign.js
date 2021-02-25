import * as React from "react";
import SignSVG from "../../ressources/images/undraw_nature.svg";
import {showSignIn, showSignUp} from "../display/show-sign-form";
import axios from "axios";

const Sign = ({"signUp": signUp, "signIn": signIn}) => (
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
                <form className={"sign-up__form"}>
                    {/* <label htmlFor={"userimg"} className={"sign-up__form__img"}>
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
                    </label> */}

                    <div className={"sign-up__form__name"}>
                        <label htmlFor={"usernameUp"} className={"label"}>
                            {"Username:"}
                        </label>
                        <input type={"text"} name={"usernameUp"} id={"usernameUp"} />
                    </div>

                    <div className={"sign-up__form__email"}>
                        <label htmlFor={"useremailUp"} className={"label"}>
                            {"Email adress:"}
                        </label>
                        <input type={"email"} name={"useremailUp"} id={"useremailUp"} />
                    </div>

                    <div className={"sign-up__form__pwd"}>
                        <label htmlFor={"userpwdUp"} className={"label"}>
                            {"Password:"}
                        </label>
                        <input type={"password"} name={"userpwdUp"} id={"userpwdUp"} />
                    </div>

                    <div className={"sign-up__form__color"}>
                        <label htmlFor={"colortheme"} className={"label"}>
                            {"Color theme:"}
                        </label>
                        
                    </div>

                    <input
                        className={"sign-up__form__btn"}
                        id={"signUpSubmit"}
                        type={"submit"}
                        value={"Sign Up"}
                        onClick={signUp}
                    />
                </form>
            </div>

            <div className={"sign-in"}>
                <img className={"sign-in__img"} src={SignSVG} alt={"Sign up"} />
                <form className={"sign-in__form"}>
                    <div className={"sign-in__form__name"}>
                        <label htmlFor={"userInfoIn"} className={"label"}>
                            {"Username:"}
                        </label>
                        <input type={"text"} name={"userInfoIn"} id={"userInfoIn"} />
                    </div>

                    <div className={"sign-in__form__pwd"}>
                        <label htmlFor={"userpwdIn"} className={"label"}>
                            {"Password:"}
                        </label>
                        <input type={"password"} name={"userpwdIn"} id={"userpwdIn"} />
                    </div>

                    <input
                        className={"sign-in__form__btn"}
                        id={"signInSubmit"}
                        type={"submit"}
                        value={"Sign In"}
                        onClick={signIn}
                    />
                </form>
            </div>
        </div>
    </div>
);

export default Sign;
