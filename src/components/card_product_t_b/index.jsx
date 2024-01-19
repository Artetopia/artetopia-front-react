import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader,CardBody,CardText, CardTitle,Col} from "reactstrap";
import ButtonAction from "../buttonAction";
const CardsProductB = ({ photoProfile, nameCraftsman, img_product, nameProduct, desProduct, price }) => {
    const addToCart = (product) => {
        console.log("product", product);
    }
    return (
        <>
            <Col className='d-flex justify-content-center pt-3'>
                <Card
                    className="my-2 w-100 shadow rounded"
                >
                    <CardHeader className="card_product_b">
                        <div className="d-flex align-items-center">
                            <img src={photoProfile} alt="" className="rounded-circle photo_perfil mr-3" />
                            <h5 className="mx-2 text-white">{nameCraftsman}</h5>
                        </div>
                    </CardHeader>
                    <img
                        alt="Card cap"
                        src={img_product}
                        width="100%"
                    />
                    <CardBody className="card_product_b rounded-bottom">
                        <CardTitle>
                            <h5 className="fw-bold text-white ml-3">{nameProduct}</h5>   
                        </CardTitle>
                        <CardText className="text-white mb-2">
                            {desProduct}
                        </CardText>
                        <div className="d-flex align-items-center justify-content-between">
                            <ButtonAction text="    Comprar" buttonClass="button-primary" type="button" icon={faCartShopping} action={() => addToCart(nameProduct)}></ButtonAction>
                            <h5 className="fw-bold mx-2">{price}</h5>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default CardsProductB;