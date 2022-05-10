import { OrbitControls, Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import style from "./Background.module.scss";

const BackGround1 = (props) => {
    let scale = Array.from({ length: 400 }, () => 0.5 + Math.random() * 3);
    const height = {
        margin: 0,
        height: window.innerHeight,
        boxShadow: "inset 0px 0px 300px 300px rgba(0, 0, 8, 1)"
    };
    const onChange = (e) => {

    }
    const onStart = (e) => {
        // console.log(e);
    }
    const onEnd = (e) => {
        // console.log(e);
    }
    return (
        <div style={height}>
            <Canvas camera={{ fov: 45, position: [0, 0, -4] }}>
                <Sparkles count={scale.length} size={scale} position={[0, 0, 0]} scale={[10, 5, 10]} speed={0.5} noise={[5, 5, 5]} color={'#00BBFF'} />
                <OrbitControls regress={true} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} onChange={(e) => onChange(e)} onStart={(e) => onStart(e)} onEnd={(e) => onEnd(e)} />
            </Canvas>
        </div>
    );
}
export default BackGround1;