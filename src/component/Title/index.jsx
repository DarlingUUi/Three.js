import style from './Title.module.scss';

const Title = ({ title, fontSize, letterSpacing }) => {
    const customStyle = {
        fontSize,
        letterSpacing
    }
    return (
        <h1 style={customStyle}>{title}</h1>
    );
}

export default Title;