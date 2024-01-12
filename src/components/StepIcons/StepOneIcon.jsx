import "../Stepper/stepper.css";

const StepOneIcon = ({selected}) => {
  return (
    <>
      <div className={`circle-step ${selected && "selected"} rounded-circle`}>
        <i className={`fa fa-user-o ${selected && "selected"} image-icon-svg d-flex justify-content-center align-items-center m-1`} />
      </div>
      <small className='progress-bar-text'>Información personal</small>
    </>
  );
};

export default StepOneIcon;
