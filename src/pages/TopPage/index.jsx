import { Link, useNavigate } from 'react-router-dom';
// import Title from '../../component/Title';
import Universe from '../../component/Universe';
import style from "./TopPage.module.scss";

const TopPage = () => {
    const navigate = useNavigate();
    const onClickRoute = (_route) => {
        navigate(_route);
    }
    return (
        <>
            <Universe />
            {/* <div className={style.landingMenu}>
                <div className={style.introduce}>
                    <div className={style.title}>
                        <h1>EXPANDING</h1>
                        <h1>STROKE</h1>
                        <h1>SOLUTIONS.</h1>
                    </div>
                    <div className={style.scrollBtn}>
                        <div><span></span></div>
                        <div>scroll</div>
                    </div>
                </div>
            </div> */}
            {/* <div className={style.landingMenu}>
                <div className={style.about}>
                    <div className={style.aboutPanel}>
                        <div className={style.topPanel}><div className={style.top}></div></div>
                        <img src='assets/index.png' alt="background" />
                        <div className={style.bottomPanel}><div className={style.bottom}></div></div>
                        <div className={style.content}>
                            <div>
                                <div>
                                    <img src='assets/about-img.png' alt="background" />
                                    <h1>Pioneering medical device company of acute ischemic stroke fo destal arteries.</h1>
                                    <div><p>Biomedical Solutions Inc. researches and develops neuronvascular intervention devices.</p></div>
                                    <div className={style.aboutBtn}>
                                        <Link className={style.aboutLink} to="/about">ABOUT</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className={style.landingMenu}>
                <div className={style.product}>
                    <div>
                        <Title title="PRODUCT" />
                        <p>
                            The device is compatible with low profile microcatheters,
                            enabling it to approach distal arteries.
                        </p>
                        <Link className={style.productLink} to="/product">MORE</Link>
                    </div>
                </div>
            </div> */}
            <div className={style.landingMenu}>
                <div className={style.contact}>
                    <Link to="/contact"></Link>
                    <div className={style.contactBtn} onClick={() => onClickRoute("contact")}>
                        <img alt='CONTACT' src='assets/contact.png' />
                        <div>
                            <div>
                                <p>CONTACT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TopPage;