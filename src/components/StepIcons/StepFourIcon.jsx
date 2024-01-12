import "../Stepper/stepper.css";

const StepFourIcon = ({selected}) => {
    return (
        <>
        <div className={`circle-step ${selected && "selected"} rounded-circle`}>
            <i className={`fa fa-shopping-bag ${selected && "selected"} image-icon-svg d-flex justify-content-center align-items-center m-1`}/>
        </div>
        <small className='progress-bar-text'>Sube tus productos</small>
        </>
        
    )
}

export default StepFourIcon;