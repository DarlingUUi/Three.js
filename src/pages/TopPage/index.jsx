import { OrbitControls, Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import style from "./TopPage.module.scss";

const TopPage = (props) => {
    let scale = Array.from({ length: 400 }, () => 0.5 + Math.random() * 3);
    const height = {
        margin: 0,
        height: window.innerHeight,
        boxShadow: "inset 0px 0px 300px 300px rgba(0, 0, 8, 1)"
    };
    return (

        <>
            <div className={style.bg}>
                <Canvas style={height} camera={{ fov: 45, position: [0, 0, -4] }}>
                    <Sparkles count={scale.length} size={scale} position={[0, 0, 0]} scale={[10, 5, 10]} speed={0.5} noise={[5, 5, 5]} color={'#00BBFF'} />
                    <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                </Canvas>
            </div>
            {/* <div className={style.landingMenu}>
                <div className={style.title}>
                    <h1>EXPANDING</h1>
                    <h1>STROKE</h1>
                    <h1>SOLUTIONS.</h1>
                </div>
                <div className={style.scrollBtn}>
                    <div><span></span></div>
                    <div>scroll</div>
                </div>
            </div> */}
            <div className={style.landingMenu}>
                <div className={style.about}>
                    <div className={style.aboutPanel}>
                        <div className={style.topPanel}><div className={style.top}></div></div>
                        <img src='assets/index.png' />
                        <div className={style.bottomPanel}><div className={style.bottom}></div></div>
                        <div className={style.content}>
                            <div>
                                <div>
                                    <h1>Pioneering medical device company of acute ischemic stroke fo destal arteries.</h1>
                                    <div><p>Biomedical Solutions Inc. researches and develops neuronvascular intervention devices.</p></div>
                                    <Link className={style.aboutBtn} to="/about">ABOUT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TopPage;