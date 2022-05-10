import style from "./LogoPanel.module.scss";
const LogoPanel = () => {
    return (
        <div className={style.logoPanel}>
            <div className={style.logoside}>
                <div>
                    <img alt="BlackDragon" src="assets/logo-1.png" />
                </div>
                <div>
                    <img alt="BlackDragon" src="assets/logo-3.png" />
                </div>
                <div>
                    <img alt="BlackDragon" src="assets/logo-2.png" />
                </div>
            </div>
            <div className={style.language}>
                <p>
                    JP / EN
                </p>
            </div>
        </div >
    );
}
export default LogoPanel;