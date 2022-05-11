import style from './Title.module.scss';

const Title = ({ title, fontSize, letterSpacing }) => {
    const customStyle = {
        fontSize,
        letterSpacing
    }
    return (
        <h1 className={style.title} style={customStyle}>{title}</h1>
    );
}

export default Title;