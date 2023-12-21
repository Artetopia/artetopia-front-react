import { Card, CardHeader,CardBody,CardText, CardTitle,Col} from "reactstrap";
import ButtonActionCart from "../buttonCart";
const CardsProductB = ({ photoProfile, nameCraftsman, img_product, nameProduct, desProduct, price }) => {
    return (
        <>
            <Col className='d-flex justify-content-center pt-3'>
                <Card
                    className="my-2 w-100 shadow rounded"
                >
                    <CardHeader className="card_product_b">
                        <div className="d-flex align-items-center">
                            <img src={photoProfile} alt="" className="rounded-circle photo_perfil mr-3" />
                            <h5 className="mx-2">{nameCraftsman}</h5>
                        </div>
                    </CardHeader>
                    <img
                        alt="Card cap"
                        src={img_product}
                        width="100%"
                    />
                    <CardBody className="card_product_b rounded-bottom">
                        <CardTitle tag="h5" className="fw-bold">
                            {nameProduct}
                        </CardTitle>
                        <CardText>
                            {desProduct}
                        </CardText>
                        <div className="d-flex align-items-center justify-content-between">
                            <ButtonActionCart buttonClass="button-primary_car" text="Comprar"></ButtonActionCart>
                            <h5 className="fw-bold mx-2">{price}</h5>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default CardsProductB;