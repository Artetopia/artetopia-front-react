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
        <div className='d-xs-block d-lg-none'>
          {step === 1 && <StepOneIcon/>}
          {step === 2 && <StepTwoIcon/>}
          {step === 3 && <StepThreeIcon/>}
          {step === 4 && <StepFourIcon/>}
          {step === 5 && <StepFiveIcon/>} 
          {step === 6 && <StepSixIcon/>}
          {step === 7 && <StepSevenIcon/>}
          <ProgressBar className='border-progress-bar d-lg-none rounded-5' label={`${step}/7`} variant="custom" now={(step / 7) * 100} />
        </div>

        <div className='d-none d-lg-block my-4'>
          <Container className="container_stepper">
            <Row className='m-2'>
              <Col><StepOneIcon selected={step === 1}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepTwoIcon selected={step === 2}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepThreeIcon selected={step === 3}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepFourIcon selected={step === 4}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepFiveIcon selected={step === 5}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepSixIcon selected={step === 6}/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepSevenIcon selected={step === 7}/></Col>
            </Row>
          </Container>
        </div>
      </div>
)}

export default Stepper;