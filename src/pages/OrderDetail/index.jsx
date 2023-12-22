import "./OrderDetail.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import FormFile from "../../components/FormFile";

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
        // dateDelivered: "2023-11-30T08:40:50.441+00:00",

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

const [shippingPic, setShipping] = useState(null);
    const handleShippingPicChange = (event) => { 
    const file = event.target.files[0]; 
    setShipping(file); 
};

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
                    <h2 className='subtitle-custom'>Seguimiento</h2>
                    <p className='body-text-container my-1'>Número de seguimiento</p>
                    <input className='imput-custom rounded-5 px-3 w-100' placeholder='Número de seguimiento' type='text'/>
                    <p className='body-text-container my-1'>Paquetería</p>
                    <select className="form-select imput-custom selected-shipping rounded-5" aria-label="Default select example">
                        <option className='body-text-container' selected>Selecciona una paquetería</option>
                        <option className='body-text-container' value="1">DHL</option>
                        <option className='body-text-container' value="2">Redpack</option>
                        <option className='body-text-container' value="3">Estafeta</option>
                        <option className='body-text-container' value="4">FedEx</option>
                        <option className='body-text-container' value="5">UPS</option>
                        <option className='body-text-container' value="6">Correos de México</option>
                        <option className='body-text-container' value="7">...Otro</option>
                    </select>
                    <p className='body-text-container my-1'>Foto de confirmación de envío</p>
                    {shippingPic  == null ?
                        <FormFile fileType='image/*' controlId="form-1" onChange={handleShippingPicChange} />
                        : ( 
                        <img className='image-uploaded-container d-block m-auto justify-content-center w-100' src={URL.createObjectURL(shippingPic)} alt="Selected file" /> 
                    )}
                </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button className='close-modal-custom px-4' variant="secondary" onClick={handleClose}>
                    Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="d-flex justify-content-center justify-content-md-between my-3">
                <ul className="list-group list-group-horizontal position-relative overflow-auto w-100">
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
                                <td className="list-text text-center align-middle">${products[0].price}</td>
                                <td className="list-text text-center align-middle">${getTotalPrice(products[0].pieces, products[0].price)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="list-text fw-normal text-center align-middle">{products[1].name}</th>
                                <td className="list-text text-center align-middle">{products[1].pieces}</td>
                                <td className="list-text text-center align-middle">${products[1].price}</td>
                                <td className="list-text text-center align-middle">${getTotalPrice(products[1].pieces, products[1].price)}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </ul>
            </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item accordion-custom">
                        <h2 className="accordion-header">
                        <button className="accordion-button accordion-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Pedido #{number}
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <div className="d-flex justify-content-center justify-content-md-between my-3">
                                    <ul className="list-group list-group-horizontal position-relative overflow-auto w-100">
                                        <table className="table">
                                            <tbody>
                                                <tr className="accordion-custom">
                                                    <th scope="row" className="accordion-custom list-text text-start fw-normal align-middle">Pedido creado</th>
                                                    <td className="accordion-custom list-text text-center align-middle">{getDate(date)}</td>
                                                </tr>
                                                <tr className="accordion-custom">
                                                    <th scope="row" className="accordion-custom list-text text-start fw-normal align-middle">Procesando pedido</th>
                                                    {dateProcessing && <td className=" accordion-custom list-text text-center align-middle">{getDate(dateProcessing)}</td>}
                                                 </tr>
                                                 <tr>
                                                    <th scope="row" className="accordion-custom list-text text-start fw-normal align-middle">Pedido entregando a paquetería</th>
                                                    {dateShipping && <td className="accordion-custom list-text text-center align-middle">{getDate(dateShipping)}</td>}
                                                 </tr>
                                                 <tr>
                                                    <th scope="row" className="accordion-custom list-text text-start fw-normal align-middle">Pedido entregado</th>
                                                    {dateDelivered && <td className="accordion-custom list-text text-center align-middle">{getDate(dateDelivered)}</td>}
                                                 </tr>
                                            </tbody>
                                        </table>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        

    ) }
export default OrderDetail;