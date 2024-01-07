import "../Stepper/stepper.css";

const StepTwoIcon = ({step}) => {

    return (
        <>
        <div className={`circle-step rounded-circle`}>
            <i className={`fa fa-vcard-o image-icon-svg d-flex justify-content-center align-items-center m-1 ng`}/>
        </div>
        <small className='progress-bar-text'>Información de tu sitio</small>
        </>
        
    )
}

export default StepTwoIcon;