import './button.css'
import Registrarse from '../registrarse_button';

const Button = () => {
  return (
    <div className='flex_buttons'>
    <button className="iniciar_session">Iniciar Sessión</button>
    <Registrarse></Registrarse>
    </div>
  )
}
export default Button;