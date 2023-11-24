import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../../styles/app.css';
const CardsAbout = ({title,text,background_img}) => {
    return (
        <>
          <div className='col-md-4 mb-4 d-flex justify-content-center '>
            <Card inverse
              className={` card_about text-center ${background_img} position-relative p-3 shadow`}
            >
              <CardBody className='position-absolute top-50 '>
                <CardTitle tag="h4" className='card_title px-3 pb-1'>
                 {title}
                </CardTitle>
                <CardText className='card_text p-2'>
                  {text}
                </CardText>
              </CardBody>
            </Card>
          </div>
        </>
    )
}

export default CardsAbout;