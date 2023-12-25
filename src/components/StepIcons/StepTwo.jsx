import "../Stepper/stepper.css";

const StepTwoIcon = ({step}) => {
    function handleActive(currentStep) {
        if(currentStep == "2"){
            return "active-icon";
        } else { 
            return "inactive-icon"
        }
    }  
    return (
        <>
        <div className={`circle-step rounded-circle ${handleActive(step)}`}>
            <i className={`fa fa-vcard-o image-icon-svg d-flex justify-content-center align-items-center m-1 ${handleActive(step)}`}/>
        </div>
        <small className='progress-bar-text'>Información de tu sitio</small>
        </>
        
    )
}

export default StepTwoIcon;