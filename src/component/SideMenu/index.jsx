import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SideMenu.module.scss";
const SideMenu = (props) => {
    const [click, setClick] = useState(false);
    return (
        <div className={`${style.navigation} ${click ? style.active : ""}`} onClick={() => setClick(!click)}>
            <a className={`fa ${click ? "fa-close" : "fa-th"}`} onClick={() => setClick(!click)} />
            <div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/toppage">TOP PAGE</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/product">PRODUCT</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/policy">privacy policy</Link></li>
                    </ul>
                </nav>
            </div>
        </div >
    );
}
export default SideMenu;