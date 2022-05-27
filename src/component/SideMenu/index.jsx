import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SideMenu.module.scss";
const SideMenu = () => {
    const [click, setClick] = useState(false);
    return (
        <>
            <button className={`${style.menubutton} fa ${click ? "fa-close" : "fa-th"}`} onClick={() => setClick(!click)} />
            {click && <div className={style.navigation} onClick={() => setClick(!click)}>
                <div>
                    <nav>
                        <ul>
                            <li><Link className={style.menuList0} to="/toppage">TOP PAGE</Link></li>
                            <li><Link className={style.menuList1} to="/about">ABOUT</Link></li>
                            <li><Link className={style.menuList2} to="/product">PRODUCT</Link></li>
                            <li><Link className={style.menuList3} to="/contact">CONTACT</Link></li>
                            <li><Link className={style.menuList4} to="/policy">privacy policy</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            }
        </>
    );
}
export default SideMenu;