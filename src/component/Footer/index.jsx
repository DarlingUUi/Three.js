import style from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={style.footer}>
            <ul className="links js-footer-links">
                <li>
                    <a href="https://www.otsuka.com/jp/" target="_blank">
                        <span>Otsuka Holdings Co.,ltd.</span>
                    </a>
                </li>
                <li>
                    <a href="http://www.omd.otsuka.com/" target="_blank">
                        <span>Otsuka Medical Devices Co.,ltd.</span>
                    </a>
                </li>
                <li>
                    <a href="https://otsuka.disclosure.site/ja" target="_blank">
                        <span>Otsuka Group Consolidated CSR</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Footer;