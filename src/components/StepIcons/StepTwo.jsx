import "../Stepper/stepper.css";

const StepTwoIcon = ({selected}) => {
    return (
        <>
        <div className={`circle-step ${selected && "selected"} rounded-circle`}>
            <i className={`fa fa-vcard-o ${selected && "selected"} image-icon-svg d-flex justify-content-center align-items-center m-1`}/>
        </div>
        <small className='progress-bar-text'>Información de tu sitio</small>
        </>
        
    )
}

export default StepTwoIcon;