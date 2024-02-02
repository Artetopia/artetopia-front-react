import ButtonAction from "../buttonAction";
import "./styles.scss";

const UserDeliveryCart = () => {
  return (
    <div className="box d-flex flex-column justify-content-center align-items-center">
      <h3><b>PedidoNúmero12</b></h3>
      <p>Pedido el 28/11/2023</p>
      <p className="p-2">2 artículos</p>
      <ButtonAction  type="button" buttonClass="button-primary" text={"Vista detalle"}></ButtonAction>
    </div>
  )
}
export default UserDeliveryCart;