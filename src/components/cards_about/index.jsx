import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
const CardsAbout = ({title,text,background_img}) => {
    return (
        <>
          <Col className='d-flex justify-content-center pt-3'>
            <Card inverse
              //style={{
               // width: '326px',
                //height: '450px'
              //}}
              className={`card_about text-center ${background_img} position-relative w-100`}
            >
              <CardBody className='position-absolute top-50 start-0 '>
                <CardTitle tag="h5" className='px-1 pb-1 card_title'>
                 {title}
                </CardTitle>
                <CardText className='px-1 pb-1 card_text'>
                  {text}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </>
    )
}

export default CardsAbout;