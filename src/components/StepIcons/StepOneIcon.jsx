import "../Stepper/stepper.css";

const StepOneIcon = ({step}) => {
  function handleActive(currentStep) {
    if(currentStep == "1"){
        return "active-icon";
    } else { 
        return "inactive-icon"
    }
}    
  return (
    <>
      <div className={`circle-step rounded-circle ${handleActive(step)}`}>
        <i className={`fa fa-user-o image-icon-svg d-flex justify-content-center align-items-center m-1 ${handleActive(step)}`} />
      </div>
      <small className='progress-bar-text'>Información personal</small>
    </>
  );
};

export default StepOneIcon;
