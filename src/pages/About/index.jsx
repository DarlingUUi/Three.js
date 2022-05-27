import Title from '../../component/Title';
import Universe from '../../component/Universe';
import style from './About.module.scss';
const About = () => {
    return (
        <>
            <Universe />
            <div className={style.aboutPage}>
                <div className={style.title}>
                    <Title title="ABOUT" letterSpacing={2} />
                </div>
                <p>
                    Biomedical Solutions Inc. researches and <br />develops neurovascular intervention devices.
                </p>
                <div className={style.shortLink}>
                    <ul>
                        <li><a href="#company">COMPANY</a></li>
                        <li><a href="#mission">MISSION</a></li>
                        <li><a href="#history">HISTORY</a></li>
                    </ul>
                </div>
                <selection id="company" className={style.subList}>
                    <Title title="COMPANY" letterSpacing={2} fontSize={60} />
                </selection>
                <div className={style.companyImg}>
                    <img alt='company' src='assets/company-img.png' />
                </div>
                <div className={style.companyDetail}>
                    <div className={style.profile}>
                        <div className={style.type}>
                            <h1>PROFILE</h1>
                        </div>
                        <div className={style.content}>
                            <div className={style.row}>
                                <div className={style.companyName}>
                                    <span>Company Name</span>
                                </div>
                                <div className={style.companyLink}>
                                    <span>Biomedical Solutions Inc.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <selection id="mission" className={style.subList}>
                    <Title title="MISSION" letterSpacing={2} fontSize={60} />
                </selection>
                <selection id="history" className={style.subList}>
                    <Title title="HISTORY" letterSpacing={2} fontSize={60} />
                </selection>
            </div>
        </>
    );
}
export default About;