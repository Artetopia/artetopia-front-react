import "../Stepper/stepper.css";

const StepThreeIcon = ({step}) => {
    function handleActive(currentStep) {
        if(currentStep == "3"){
            return "active-icon";
        } else { 
            return "inactive-icon"
        }
    }       
    return (
        <>
        <div className={`circle-step rounded-circle ${handleActive(step)}`}>
            <i className={`fa fa-image image-icon-svg d-flex justify-content-center align-items-center m-1 ${handleActive(step)}`} />
        </div>
        <small className='progress-bar-text'>Sube tus fotos</small>
        </>
        
    )
}

export default StepThreeIcon;