import './button.css'
import Registrarse from '../white_button';
import Pink_button from '../pink_button';

const Button = () => {
  return (
    <div className='flex_buttons'>
    <Pink_button></Pink_button>
    <Registrarse></Registrarse>
    </div>
  )
}
export default Button;