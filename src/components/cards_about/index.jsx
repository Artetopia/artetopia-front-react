import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
const CardsAbout = ({title,text,background_img}) => {
    return (
        <>
          <Col className='d-flex justify-content-center'>
            <Card inverse
              style={{
                width: '326px',
                height: '450px'
              }}
              className={`text-center ${background_img} position-relative`}
            >
              <CardBody className='position-absolute bottom-0 start-0'>
                <CardTitle tag="h5">
                 {title}
                </CardTitle>
                <CardText className='p-3'>
                  {text}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </>
    )
}

export default CardsAbout;