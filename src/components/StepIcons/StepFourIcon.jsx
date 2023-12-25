import "../Stepper/stepper.css";

const StepFourIcon = ({step}) => {
    function handleActive(currentStep) {
        if(currentStep == "4"){
            return "active-icon";
        } else { 
            return "inactive-icon"
        }
    }  
    return (
        <>
        <div className={`circle-step rounded-circle ${handleActive(step)}`}>
            <i className={`fa fa-shopping-bag image-icon-svg d-flex justify-content-center align-items-center m-1 ${handleActive(step)}`}/>
        </div>
        <small className='progress-bar-text'>Sube tus productos</small>
        </>
        
    )
}

export default StepFourIcon;