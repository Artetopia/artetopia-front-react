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
                            imge="https://c8.alamy.com/comp/2HEMDJD/mexican-crafts-details-san-miguel-de-allende-mexico-2HEMDJD.jpg"
                            name_product="Muñeqas tradicionales"
                            name_craftman="Victor"
                            price="240"
                            cantidad="2"
                            userDeliveries
                        ></ProductCard>
                        <ProductCard
                            imge="https://i.pinimg.com/564x/60/6e/53/606e535f100765eedb951fee99839cad.jpg"
                            name_product="Poster tradicional"
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
                            userDeliveries
                        ></ProductCard>
                        <ProductCard
                            imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
                            name_product="Catrinas con vestidos tipicos"
                            name_craftman="Victor"
                            price="240"
                            cantidad="2"
                            userDeliveries
                        ></ProductCard>
                    </div>
   </div>
   </div>
    </>
  )
}
export default UserDeliveries