import "./OrdersCraftsman.css";

function OrdersCraftsman() {
    return (
        <div className="container">
            <h2 className="principal-text-orders d-flex justify-content-center fw-bold mt-3">Mis pedidos</h2>    
            <div className="row">
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                <button className='buttons-custom principal-buttons-custom pending-orders-button fw-medium text-center rounded-2 my-1'>Pedidos pendientes</button>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                <button className='buttons-custom principal-buttons-custom border-color-buttons fw-medium text-center rounded-2 my-1'>Pedidos completados</button>        
                </div>
            </div>
            <div className="d-flex justify-content-center my-3">
                <ul className="list-group list-group-horizontal position-relative overflow-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="list-text text-center fw-bold">Número de pedido</th>
                                <th scope="col" className="list-text text-center fw-bold">Cliente</th>
                                <th scope="col" className="list-text text-center fw-bold">Fecha de pedido</th>
                                <th scope="col" className="list-text text-center fw-bold">Estado</th>
                                <th scope="col" className="list-text text-center fw-bold">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="list-text fw-normal text-center align-middle">#18933</th>
                                <td className="list-text text-center align-middle">Cliente 1</td>
                                <td className="list-text text-center align-middle">13/05/2022</td>
                                <td className="list-text text-center align-middle"><button className='status-button fw-medium mt-2 p-2 rounded-pill'>Creado</button></td>
                                <td className="list-text text-center align-middle"><button className='buttons-custom show-buttons fw-medium border-color-buttons text-center rounded-2 my-1'>Visualizar</button></td>
                            </tr>
                            <tr>
                                <th scope="row" className="list-text fw-normal text-center align-middle">#18934</th>
                                <td className="list-text text-center align-middle">Cliente 2</td>
                                <td className="list-text text-center align-middle">22/05/2022</td>
                                <td className="list-text text-center align-middle"><button className='status-button fw-medium mt-2 p-2 rounded-pill'>Paqueteria</button></td>
                                <td className="list-text text-center align-middle"><button className='buttons-custom show-buttons fw-medium border-color-buttons text-center rounded-2 my-1'>Visualizar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </ul>
            
            </div>
        </div>
    )}

export default OrdersCraftsman;