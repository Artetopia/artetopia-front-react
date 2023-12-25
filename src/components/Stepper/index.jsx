import { Col, Container, ProgressBar, Row } from "react-bootstrap"
import StepOneIcon from '../StepIcons/StepOneIcon';
import StepTwoIcon from '../StepIcons/StepTwo';
import StepThreeIcon from '../StepIcons/StepThreeIcon';
import StepFourIcon from '../StepIcons/StepFourIcon';
import StepFiveIcon from '../StepIcons/StepFiveIcon';
import StepSixIcon from '../StepIcons/StepSixIcon';
import StepSevenIcon from '../StepIcons/StepSevenIcon';

const Stepper = ({step}) => {
    return (
      <div >
        <div className='d-xs-block d-lg-none my-3'>
          {step === 1 && <StepOneIcon step={step}/>}
          {step === 2 && <StepTwoIcon step={step}/>}
          {step === 3 && <StepThreeIcon step={step}/>}
          {step === 4 && <StepFourIcon step={step}/>}
          {step === 5 && <StepFiveIcon step={step}/>} 
          {step === 6 && <StepSixIcon step={step}/>}
          {step === 7 && <StepSevenIcon step={step}/>}
          <ProgressBar className='border-progress-bar d-lg-none rounded-5 my-2' label={`${step}/7`} variant="custom" now={(step / 7) * 100} />
        </div>

        <div className='d-none d-lg-block my-4'>
          <Container>
            <Row className='m-2'>
              <Col ><StepOneIcon step={step} className='d-flex justify-content-center'/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepTwoIcon step={step}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepThreeIcon step={step}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepFourIcon step={step}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepFiveIcon step={step}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepSixIcon step={step}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepSevenIcon step={step}/></Col>
            </Row>
          </Container>
        </div>
      </div>
)}

export default Stepper;