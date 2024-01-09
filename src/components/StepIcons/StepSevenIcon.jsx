import "../Stepper/stepper.css";

const StepSixIcon = ({selected}) => {
    return (
        <>
         <div className={`circle-step ${selected && "selected"} rounded-circle`}>
            <i className={`fa fa-credit-card ${selected && "selected"} image-icon-svg d-flex justify-content-center align-items-center m-1`}/>
        </div>
        <small className='progress-bar-text'>Pagos</small>
        </>
        
    )
}

export default StepSixIcon;