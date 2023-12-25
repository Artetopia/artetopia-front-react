import "../Stepper/stepper.css";

const StepSixIcon = ({step}) => {
    function handleActive(currentStep) {
        if(currentStep == "6"){
            return "active-icon";
        } else { 
            return "inactive-icon"
        }
    }    
    return (
        <>
         <div className={`circle-step rounded-circle ${handleActive(step)}`}>
            <i className={`fa fa-info image-icon-svg d-flex justify-content-center align-items-center m-1 ${handleActive(step)}`}/>
        </div>
        <small className='progress-bar-text'>Información adicional</small>
        </>
        
    )
}

export default StepSixIcon;