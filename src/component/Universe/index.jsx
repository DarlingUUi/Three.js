import { OrbitControls, Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import style from "./Universe.module.scss";

const Universe = () => {

    let scale = Array.from({ length: 400 }, () => 0.5 + Math.random() * 3);
    
    const height = {
        margin: 0,
        height: window.innerHeight,
        boxShadow: "inset 0px 0px 300px 300px rgba(0, 0, 8, 1)"
    };

    return (
        <div className={style.bg}>
            <Canvas style={height} camera={{ fov: 45, position: [0, 0, -4] }}>
                <Sparkles count={scale.length} size={scale} position={[0, 0, 0]} scale={[10, 5, 10]} speed={0.5} noise={[5, 5, 5]} color={'#00BBFF'} />
                <OrbitControls autoRotate={true} autoRotateSpeed={1} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    );
}
export default Universe;