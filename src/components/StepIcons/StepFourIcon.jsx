import "../Stepper/stepper.css";

const StepFourIcon = ({step}) => {

    return (
        <>
        <div className={`circle-step rounded-circle `}>
            <i className={`fa fa-shopping-bag image-icon-svg d-flex justify-content-center align-items-center m-1 `}/>
        </div>
        <small className='progress-bar-text'>Sube tus productos</small>
        </>
        
    )
}

export default StepFourIcon;