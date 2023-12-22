import bgArtesano from "../../../public/assets/bgArtesano.png";
import "./styles.css";
const CardArtesanoImages = ({ name, description, profileImage, images }) => {
  return (
    <>
      <div className="card artesano-card shadow border-0">
        <div className="card-img-block">
          <img
            className="img-fluid w-100 h-100 rounded-top"
            src={bgArtesano}
            alt="Card image cap"
          />
        </div>
        <div className="card-body position-relative padding-top__65">
          <div className="d-flex flex-row profile-container w-100 position-absolute align-items-center">
            <img
              src={profileImage}
              alt="profile-image"
              className="profile h-100 w-100"
            />
            <h5 className="card-title m-0 p-0">{name}</h5>
          </div>
          <p className="card-text">{description}</p>
          <div className="row g-2">
            {images.map((image, index) => {
              return (
                <>
                  <div key={index} className="col-6 mb-2">
                    <img
                      src={image}
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArtesanoImages;
