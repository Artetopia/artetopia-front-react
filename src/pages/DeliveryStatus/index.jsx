import "./deliveryStatus.scss";

const deliveryStatus = ({guideNumber, status}) => {

    return (
        <>
        <p className='guide-container text-center m-2'>Número de guía: {guideNumber}</p>
        <div className="d-flex justify-content-center">
            {status === 'created' && 
            <div> 
                <img className='images-delivery-container' src="/order-created.svg" alt='vector sobre orden creada'/>
                <p>{status}</p>
            </div>
            }
        </div>
        </>
    )
}

export default deliveryStatus;