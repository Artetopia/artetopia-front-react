import { Col, Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap';
const CardsAditionalTB = ({ title, text, background_img }) => {
    return (
        <>
            <Col className='d-flex justify-content-center pt-3'>
                <Card inverse
                    //style={{
                    // width: '326px',
                    //height: '450px'
                    //}}
                    className={`text-center ${background_img} position-relative w-100`}
                >
                    <CardHeader tag="h4" className="card_title">
                        {title}
                    </CardHeader>
                    <CardBody className='position-absolute top-50 start-0 p-0'>
                        <CardText className='px-2 card_text'>
                           <p>{text}</p> 
                        </CardText>
                    </CardBody>
                </Card>
            </Col >
        </>
    )
}
export default CardsAditionalTB