import "./styles.css";
import profileImgArtesano from "/images/profileImgArtesano.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CardProductA = ({name, description, price, artesanoName}) => {
    return (
        <>
        <div className="card card-secondary">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <img
                    src={profileImgArtesano}
                    alt="Card Image"
                    className="card-image"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card-body">
                    <h5 className="card-title text-white text-center">
                      {name}
                    </h5>
                    <p className="card-text text-white text-center">
                      {description}
                    </p>
                    <div className="d-flex justify-content-center">
                    <button className="btn button-primary d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="cart-icon text-white m-1 border-0"
                      />
                      <p className="m-0 p-0">Agregar al carrito</p>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between text-white">
                <p className="m-0">${price}</p>
                <div className="d-flex align-items-center">
                    <p className="m-0">{artesanoName}</p>
                    <img src={profileImgArtesano} alt="profileImg" className="profile-image ms-3" />
                </div>
              </div>
            </div>
        </>
    )
}

export default CardProductA;