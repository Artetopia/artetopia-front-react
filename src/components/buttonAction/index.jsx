import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './styles.css';
const ButtonAction = ({ buttonClass, text, action, icon, type }) => {
    let buttonValue;
    switch (type) {
        case "button":
            buttonValue = <button type='button' onClick={action} className={buttonClass}>{icon && <FontAwesomeIcon icon={icon}/>}{text}</button>
            break;
        case "submit":
            buttonValue = <button type='submit' className={buttonClass}>{icon && <FontAwesomeIcon icon={icon}/>}{text}</button>;
            break;
        default:
            buttonValue = <Link className={buttonClass} to={action}>{icon && <FontAwesomeIcon icon={icon}/>}{text}</Link>;
            break;
    }
    return (
        <>
        {buttonValue}
        </>
    );
};

export default ButtonAction;
