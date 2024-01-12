import "./deliveryStatus.scss";

const DeliveryStatus = ({guideNumber, status}) => {

    return (
        <>
        <div className="m-2">
            <p className='guide-container text-center m-2'>Número de guía: <a href="https://www.kodemia.com/" className='guide-container'>{guideNumber}</a></p>
        </div>
        <div className="container"> 
            <div className="row d-flex justify-content-center mx-1 my-5">
                {(status === 'created'
                || status === 'processing' 
                || status === 'shipping' 
                || status === 'delivered') 
                &&
                <div className="col-6 col-md-3"> 
                    <img className='images-delivery-container d-flex justify-content-center m-auto' src="/order-created.svg" alt='imagen orden creada'/>
                    <p className='status-text-container text-center '>Creado</p>
                </div>
                }
                {(status === 'processing' 
                || status === 'shipping' 
                || status === 'delivered') 
                && 
                <div className="col-6 col-md-3"> 
                    <img className='images-delivery-container pe-1 d-flex justify-content-center m-auto' src="/delivery.svg" alt='imagen procesando orden'/>
                    <p className='status-text-container text-center'>Procesando</p>
                </div>
                }
                {(status === 'shipping' 
                || status === 'delivered') 
                && 
                <div className="col-6 col-md-3"> 
                    <img className='images-delivery-container ps-1 d-flex justify-content-center m-auto' src="/shipping-vector.svg" alt='imagen entregado a paqueteria'/>
                    <p className='status-text-container text-center'>Entregado a paqueteria</p>
                </div>
                }
                {status === 'delivered'
                && 
                <div className="col-6 col-md-3"> 
                    <img className='images-delivery-container d-flex justify-content-center m-auto' src="/order-delivered.svg" alt='imagen entregado a paqueteria'/>
                    <p className='status-text-container text-center'>Entregado</p>
                </div>
                }
            </div>
            {status === 'created' && <p className='text-center status-text-custom'>Estado actual del pedido: <span className='actual-status-custom'>Creado</span></p>}
            {status === 'processing' && <p className='text-center status-text-custom'>Estado actual del pedido: <span className='actual-status-custom'>Procesando</span></p>}
            {status === 'shipping' && <p className='text-center status-text-custom'>Estado actual del pedido: <span className='actual-status-custom'>Entregado a paqueteria</span></p>}
            {status === 'delivered' && <p className='text-center status-text-custom'>Estado actual del pedido: <span className='actual-status-custom'>Entregado</span></p>}
            <div className="d-flex justify-content-center">
                <button className='provider-button rounded-2 p-2 mb-4 my-md-5'>Ir a la pagina del proveedor</button>
            </div>
        </div>
        </>
    )
}

export default DeliveryStatus;