import './button.css';
import ButtonAction from '../buttonAction';

const Button = () => {
    return (
        <div className='flex_buttons'>
            <ButtonAction
                buttonClass='button-primary'
                text='Iniciar sesión'
                action="/login"
            ></ButtonAction>
        </div>
    );
};
export default Button;
