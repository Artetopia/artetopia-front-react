import ButtonAction from "../../components/buttonAction";
import "./payments.scss"

const Payments = () => {
    return (
        <>
        <div className='m-5'>
            <h2>Pagos</h2>
            <p className='payments-text m-0'>En el siguiente link podras ver todos los pagos que se te han realizado y podras modificar la información dentro del panel de pagos</p>
            <div className="d-flex d-flex justify-content-center justify-content-lg-end ">
                <ButtonAction text="Ver dashboard" type="button" buttonClass="button-primary mt-3"></ButtonAction>
            </div>
        </div>
        </>
    )
}

export default Payments;