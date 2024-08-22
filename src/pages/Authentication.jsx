import Button from "../components/Button.jsx";
import "../styles/authentication.css";
import {Link} from "react-router-dom";

export default function Authentication() {
    return (
        <>
            <div className={"auth-container"}>
                <form className={"main-form"}>
                    <div className={"form-header"}>
                        <div>
              <span>
                <img src="/logo-img.png" alt={"logo"}/>
              </span>
                        </div>

                        <div>
                            <h1>
                                BITS{" "}
                                <span id={"green-text"}>STUDENT INFORMATION MANAGEMENT</span>{" "}
                                SYSTEM
                            </h1>
                        </div>
                    </div>
                    <div className={"input-bar"}>
                        <div className={"row-flex"}>
                            <input name={"Email"} placeholder={"Email"}/>
                            <span className={"adj-logos"}>
                <img
                    src="/mail.png"
                    className={"input-logos"}
                    alt={"mail icon"}
                />
              </span>
                        </div>
                        <div className={"row-flex"}>
                            <input name={"Password"} placeholder={"Password"}/>
                            <span className={"adj-logos"}>
                <img
                    src="/key.png"
                    className={"input-logos"}
                    alt={"mail icon"}
                />
              </span>
                        </div>
                    </div>
                    <Link to={"/dashboard"}>
                        <Button className={"green-button authentication-btn default-btn"}>
                            Login
                        </Button>
                    </Link>
                    <Link to={"/dashboard"}>
                        <Button
                            id={"help-support-btn"}
                            className={"green-button authentication-btn default-btn"}
                        >
                            Help & Support
                        </Button>
                    </Link>

                </form>
            </div>
        </>
    );
}
