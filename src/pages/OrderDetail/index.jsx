import "./OrderDetail.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function OrderDetail() {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const order = {
        number: "1234",
        clientName: "Jhon Doe",
        date: "2023-11-07T20:52:51.441+00:00",
        adress: "Calle abcd #123 Condesa cp 12345 Monterrey, Nuevo Leon",
        products: [
            {
                name: "Blusa bordada tonos calidos",
                pieces: "4",
                price: "799.90",
            },
            {
                name: "Pintura danza fauvista óleo sobre lienzo",
                pieces: "2",
                price: "1000",
            },
        ],
        dateProcessing: "2023-11-10T10:02:40.441+00:00",
        dateShipping: "2023-11-19T12:31:42.441+00:00",
        dateDelivered: "2023-11-30T08:40:50.441+00:00",

    }
const {number, clientName, date, adress, products, dateProcessing, dateShipping, dateDelivered} = order;

const getDate = (dateAndHour => {
    const [date, hour] = dateAndHour.split("T");
    const [year, month, day] = date.split("-");
    const dateFixed = day + "/" + month + "/" + year;
    return dateFixed;
})

const getTotalPrice = ((pieces, price) => {
    const totalPrice = pieces * price;
    return totalPrice;
})

    return (
        <div className='container'>
            <h2 className='title-text-custom fw-bold mt-4'>Pedido #{number}</h2>
            <p className='body-text-custom fw-medium m-0'>Nombre del cliente: {clientName}</p>
            <p className='body-text-custom fw-medium m-0'>Fecha del pedido: {getDate(date)}</p>
            <p className='body-text-custom fw-medium m-0'>Dirección de envío: {adress}</p>
            <Button className='custom-button fw-medium my-3' variant="primary" onClick={handleShow}>
                Confirmar entrega a paqueteria
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                <div className="rounded-4 px-lg-2">
                    <p>Hola</p>
                </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button className='custom-button' variant="secondary" onClick={handleClose}>
                    Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="d-flex justify-content-center justify-content-md-between my-3">
                <ul className="list-group list-group-horizontal position-relative overflow-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="list-text text-center fw-bold">Producto</th>
                                <th scope="col" className="list-text text-center fw-bold">Cantidad</th>
                                <th scope="col" className="list-text text-center fw-bold">Precio unitario</th>
                                <th scope="col" className="list-text text-center fw-bold">Precio total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="list-text fw-normal text-center align-middle">{products[0].name}</th>
                                <td className="list-text text-center align-middle">{products[0].pieces}</td>
                                <td className="list-text text-center align-middle">{products[0].price}</td>
                                <td className="list-text text-center align-middle">{getTotalPrice(products[0].pieces, products[0].price)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="list-text fw-normal text-center align-middle">{products[1].name}</th>
                                <td className="list-text text-center align-middle">{products[1].pieces}</td>
                                <td className="list-text text-center align-middle">{products[1].price}</td>
                                <td className="list-text text-center align-middle">{getTotalPrice(products[1].pieces, products[1].price)}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </ul>
            
            </div>
        
        </div>

    ) }
export default OrderDetail;