import "../Stepper/stepper.css";

const StepThreeIcon = ({step}) => {
 
    return (
        <>
        <div className={`circle-step rounded-circle `}>
            <i className={`fa fa-image image-icon-svg d-flex justify-content-center align-items-center m-1`} />
        </div>
        <small className='progress-bar-text'>Sube tus fotos</small>
        </>
        
    )
}

export default StepThreeIcon;