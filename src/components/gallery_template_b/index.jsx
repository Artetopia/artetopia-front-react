import "./styles/styles.css"
const GalleryTemplateB = ({ img1, img2, img3, img4, img5, img6 }) => {
  return (
    <>
      <div className="d-none d-lg-block"> 

        <div className="row h-75 gallery ">
          <div className="col-lg-4 col-md-12">
            <img
              src={img1}
              className="shadow-1-strong rounded mb-4 imgx "
              alt="Boat on Calm Water"
            />

            <img
              src={img2}
              className="shadow-1-strong rounded mb-4 imgx"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col-lg-4">
            <img id="imgy"
              src={img3}
              className="shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img id="imgy1"
              src={img4}
              className=" shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4">
            <img
              src={img5}
              className="shadow-1-strong rounded mb-4 imgx"
              alt="Waves at Sea"
            />

            <img
              src={img6}
              className="shadow-1-strong rounded mb-4 imgx"
              alt="Yosemite National Park"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default GalleryTemplateB