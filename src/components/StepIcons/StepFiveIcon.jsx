import "../Stepper/stepper.css";

const StepFiveIcon = ({step}) => {
    function handleActive(currentStep) {
        if(currentStep == "5"){
            return "active-icon";
        } else { 
            return "inactive-icon"
        }
    }    
    return (
        <>
         <div className={`circle-step rounded-circle ${handleActive(step)}`}>
            <i className={`fa fa-paint-brush image-icon-svg d-flex justify-content-center align-items-center m-1 ${handleActive(step)}`}/>
        </div>
        <small className='progress-bar-text'>Elige una plantilla</small>
        </>
        
    )
}

export default StepFiveIcon;