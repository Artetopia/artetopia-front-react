import "../Stepper/stepper.css";

const StepOneIcon = () => {
  return (
    <>
      <div className="circle-step rounded-circle">
        <i className="fa fa-user-o image-icon-svg d-flex justify-content-center align-items-center m-1" />
      </div>
      <small className='progress-bar-text'>Información personal</small>
    </>
  );
};

export default StepOneIcon;
