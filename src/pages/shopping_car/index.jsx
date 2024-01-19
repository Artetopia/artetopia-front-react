import ProductCard from "../../components/produc_car";
import "./styles/styles.css"
import ButtonAction from "../../components/buttonAction";


    
const ShoppingCar = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="d-flex  justify-content-start align-items-center w-100">
                        <h1 className="me-3">Carrito </h1>
                        <small> productos</small>
                    </div>
                    <div id="container_card"
                    style={{
                        overflowX: "scroll",
                        overflowY: "scroll",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                      }}
                     className='col-12 col-lg-9 '>
                        <ProductCard
                            imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
                            name_product="Catrinas con vestidos tipicos"
                            name_craftman="Victor"
                            price="240"
                            cantidad="2"
                        ></ProductCard>
                        <ProductCard
                            imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
                            name_product="Catrinas con vestidos tipicos"
                            name_craftman="Victor"
                            price="240"
                            cantidad="2"
                        ></ProductCard>
                        <ProductCard
                            imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
                            name_product="Catrinas con vestidos tipicos"
                            name_craftman="Victor"
                            price="240"
                            cantidad="2"
                        ></ProductCard>
                        <ProductCard
                            imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
                            name_product="Catrinas con vestidos tipicos"
                            name_craftman="Victor"
                            price="240"
                            cantidad="2"
                        ></ProductCard>
                        <ProductCard
                            imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
                            name_product="Catrinas con vestidos tipicos"
                            name_craftman="Victor"
                            price="240"
                            cantidad="2"
                        ></ProductCard>
                        <ProductCard
                            imge="https://chompoartesanias.com/wp-content/uploads/2022/10/20211127_140458-scaled.jpg"
                            name_product="Botella de Tequila Venado"
                            name_craftman="Jose"
                            price="1500"
                            cantidad="2"
                        ></ProductCard>
                        <ProductCard
                            imge="https://ungustito.mx/wp-content/uploads/2022/05/regalale-una-artesania-a-tu-mama-este-10-de-mayo-de-tienda-casart-1.jpg"
                            name_product="Juego de Té de barro"
                            name_craftman="Victor"
                            price="2040"
                            cantidad="1"
                        ></ProductCard>
                        <ProductCard
                            imge="https://img.freepik.com/fotos-premium/accesorios-hechos-chaquira-multicolor-artesanias-mexicanas-hechas-piedras-colores_955012-265.jpg"
                            name_product="Pendientes"
                            name_craftman="Jule"
                            price="800"
                            cantidad="1"
                        ></ProductCard>
                    </div>
                    <div className='col-12 col-lg-3 text-center p-3'>
                        <button className="btn btn-outline-secondary w-100 p-3 mb-3 shadow mt-3 mt-lg-0">Seguir comprando </button>
                        <div className="container_checkout p-3 rounded">
                            <div className="d-flex justify-content-between">
                                <small className="text-white">En total # artesanos</small>
                                <h4 className="text-white">$Total</h4>
                            </div>
                            <hr />
                            <ButtonAction
                                buttonClass="button-primary"
                                text="Checkout"></ButtonAction>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCar;