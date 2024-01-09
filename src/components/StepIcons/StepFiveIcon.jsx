import "../Stepper/stepper.css";

const StepFiveIcon = ({selected}) => {
    return (
        <>
         <div className={`circle-step ${selected && "selected"} rounded-circle`}>
            <i className={`fa fa-paint-brush ${selected && "selected"} image-icon-svg d-flex justify-content-center align-items-center m-1`}/>
        </div>
        <small className='progress-bar-text'>Elige una plantilla</small>
        </>
        
    )
}

export default StepFiveIcon;