import UserDeliveryCart from "../../components/user_delivery_cart"
import "./styles.scss"

const UserAllDeliveries = () => {
  return (
    <>
    <div className="hello p-5">
    <section className="d-flex justify-content-between p-3">
      <h3>Mis Pedidos</h3>
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
      </div>
    </section>
    <div className="d-flex justify-content-center flex-wrap gap-5">
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    <UserDeliveryCart></UserDeliveryCart>
    </div>
    </div>
    </>
  )
}
export default UserAllDeliveries