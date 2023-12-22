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
          <Container>
            <Row className='m-2'>
              <Col><StepOneIcon/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepTwoIcon/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepThreeIcon/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepFourIcon/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepFiveIcon/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepSixIcon/></Col>
              <Col><hr className='row-width align-self-center'></hr></Col>
              <Col><StepSevenIcon/></Col>
            </Row>
          </Container>
        </div>
      </div>
)}

export default Stepper;