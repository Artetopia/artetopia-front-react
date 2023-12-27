import { Link } from 'react-router-dom';
import './styles.css';
const ButtonAction = ({ buttonClass, text, action }) => {
    return (
        <>
            <Link className={buttonClass} to={action}>{text}</Link>
        </>
    );
};

export default ButtonAction;
