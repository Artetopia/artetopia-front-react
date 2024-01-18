import "./styles.scss"
import ProductCard from "../../components/produc_car";

const UserDeliveries = () => {
  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center">
      
      

    <div className="row">
    <div className="p-3">
        <h1>#PedidoNúmero12</h1>
        <p className="text-start">Pedido el 28/11/2023 | <span>2 artículos</span></p>
      </div>
    <div className='col-12 col-lg-8'>
    <ProductCard
        imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
        name_product="Catrinas con vestidos tipicos"
        name_craftman="Victor"
        price="240"
        cantidad="2"
      ></ProductCard>
      </div>
      <div className='col-12 col-lg-8'>
    <ProductCard
        imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
        name_product="Catrinas con vestidos tipicos"
        name_craftman="Victor"
        price="240"
        cantidad="2"
      ></ProductCard>
      </div>
      <div className='col-12 col-lg-8'>
    <ProductCard
        imge="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Catrinas_2.jpg/220px-Catrinas_2.jpg"
        name_product="Catrinas con vestidos tipicos"
        name_craftman="Victor"
        price="240"
        cantidad="2"
      ></ProductCard>
      </div>
      </div>
      </div>
    </>
  )
}
export default UserDeliveries