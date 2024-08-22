import {DatePicker} from "../components/DatePicker.jsx";
import Button from "../components/Button.jsx";
import {Link} from "react-router-dom";

export function DateForm() {
    const datePickers = Array(4).fill(<DatePicker/>);

    return (
        <div className="column-flex" style={{marginTop: "-15px"}}>
            {datePickers}
            <div className="row-flex" style={{justifyContent: "flex-end", width: "70%", margin: "10px auto"}}>
                <Button className="red-button default-btn" style={{marginRight: "1.2rem"}}>
                    <div className="btn-content">
                        <span>Cancel</span>
                        <img alt="cancel icon" src="/Multiply.png"/>
                    </div>
                </Button>
                <Button className="red-button default-btn" style={{marginRight: "1.2rem"}}>
                    <div className="btn-content">
                        <span>Clear</span>
                        <img alt="cancel icon" src="/Multiply.png"/>
                    </div>
                </Button>
                <Link to={"/academic-timeline/timelines"}>
                    <Button className="green-button default-btn" style={{width: "195px"}}>
                        <div className="btn-content">
                            <span>Submit Timeline</span>
                            <img alt="submit icon" src="/Submit.png"/>
                        </div>
                    </Button>
                </Link>

            </div>
        </div>
    );
}
