import style from './Footer.module.scss';

const Footer = () => {
    const urls = [
        "https://www.otsuka.com/jp/",
        "http://www.omd.otsuka.com/",
        "https://otsuka.disclosure.site/ja"
    ]
    return (
        <div className={style.footer}>
            <ul className="links js-footer-links">
                <li>
                    <a href={urls[0]}>
                        <span>Otsuka Holdings Co.,ltd.</span>
                    </a>
                </li>
                <li>
                    <a href={urls[1]}>
                        <span>Otsuka Medical Devices Co.,ltd.</span>
                    </a>
                </li>
                <li>
                    <a href={urls[2]}>
                        <span>Otsuka Group Consolidated CSR</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Footer;