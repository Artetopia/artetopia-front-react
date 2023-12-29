import { Link } from 'react-router-dom';
import './styles.css';
const ButtonAction = ({ buttonClass, text, action }) => {
    return (
        <>
        {action ? <Link className={buttonClass} to={action}>{text}</Link> : <button type='submit' className={buttonClass}>{text}</button>}
        </>
    );
};

export default ButtonAction;
