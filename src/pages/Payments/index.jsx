import "./payments.scss"

const payments = () => {
    return (
        <>
        <div className=' m-5'>
            <p className='payments-text text-center text-uppercase'>En el siguiente link podras ver todos los pagos que se te han realizado y podras modificar la información dentro del panel de pagos</p>
            <div className="d-flex d-flex justify-content-center justify-content-lg-end ">
                <button className='show-dashboard-button rounded-2 p-3 '>Ver Dashboard</button>
            </div>
        </div>
        </>
    )
}

export default payments;