import "./styles.scss"
import ProductCard from "../../components/produc_car";

const UserDeliveries = () => {
  return (
    <>
    <div className="container d-flex flex-column justify-content-center">
      
      

    <div className="row">
    <div className="d-flex flex-column p-3 align-items-start">
        <h1>#PedidoNúmero12</h1>
        <p className="text-start">Pedido el 28/11/2023 | <span>2 artículos</span></p>
      </div>
      <div id="container_card"
                    style={{
                        overflowX: "scroll",
                        overflowY: "scroll",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                      }}
                     className='col-12 '>
                        <ProductCard
                            imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
                            name_product="Catrinas con vestidos tipicos"
                            name_craftman="Victor"
                            price="240"
                            cantidad="2"
                            userDeliveries
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
   </div>
   </div>
    </>
  )
}
export default UserDeliveries