import './styles.css';
const ButtonAction = ({ buttonClass, text }) => {
    return (
        <>
            <button className={buttonClass}>{text}</button>
        </>
    );
};

export default ButtonAction;
