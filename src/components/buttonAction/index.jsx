import './styles.css';
const ButtonAction = ({ buttonClass, text, action }) => {
    return (
        <>
            <button className={buttonClass} onClick={action}>{text}</button>
        </>
    );
};

export default ButtonAction;
