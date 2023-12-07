import "./styles.css"
import Step7image from "../../assets/reg_step-7.svg"

const Step_7 = () => {
  return (
    <>
    

    <div className="contentFlex">
    <p>El siguiente boton te llevara a Stripe donde gestionamos los pagos. 
    Al finalizar, volveras a esta pantalla
     para que termines el proceso</p>
     <button className="step-7_payments_button_tablet">Iniciar processo</button>
     <img src={Step7image} alt="Imagen de joven ayudando con el registro a nuevo usuario" className="reg_step-7_image"/>
     <section>
     <button className="step-7_payments_button">Iniciar processo</button>
     </section>
     <p className="tutorial-link">Si tienes dudas puedes seguir el siguiente tutorial: <span>Tutorial</span> </p>
     
    </div>
    </>
  )
}
export default Step_7