import "./deliveryStatus.scss";

const deliveryStatus = ({guideNumber, status}) => {

    return (
        <>
        <div className="m-2">
            <p className='guide-container text-center m-2'>Número de guía: {guideNumber}</p>
        </div>
        <div className="container"> 
            <div className="row d-flex justify-content-center mx-1 my-5">
                {(status === 'created'
                || status === 'processing' 
                || status === 'shipping' 
                || status === 'delivered') 
                &&
                <div className="col-3 "> 
                    <img className='images-delivery-container ' src="/order-created.svg" alt='imagen orden creada'/>
                    <p className='status-text-container text-center '>Creado</p>
                </div>
                }
                {(status === 'processing' 
                || status === 'shipping' 
                || status === 'delivered') 
                && 
                <div className="col-3"> 
                    <img className='images-delivery-container pe-1' src="/delivery.svg" alt='imagen procesando orden'/>
                    <p className='status-text-container text-center'>Procesando</p>
                </div>
                }
                {(status === 'shipping' 
                || status === 'delivered') 
                && 
                <div className="col-3"> 
                    <img className='images-delivery-container ms-1' src="/shipping-vector.svg" alt='imagen entregado a paqueteria'/>
                    <p className='status-text-container text-center'>Entregado a paqueteria</p>
                </div>
                }
                {status === 'delivered'
                && 
                <div className="col-3"> 
                    <img className='images-delivery-container' src="/order-delivered.svg" alt='imagen entregado a paqueteria'/>
                    <p className='status-text-container text-center'>Entregado</p>
                </div>
                }
            </div>
            <div className="d-flex justify-content-center">
                <button className='provider-button rounded-2 p-2 mb-4 my-md-5'>Ir a la pagina del proveedor</button>
            </div>
        </div>
        </>
    )
}

export default deliveryStatus;