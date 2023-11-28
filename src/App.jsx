import "./styles/app.scss";
//import bgArtesano from './assets/bgArtesano.png'
import HeaderComponent from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <header>
        <HeaderComponent></HeaderComponent>
      </header>

      <section id="hero-section"></section>

      <section id="about"></section>

      <section id="artesanos">
        <div className="container">
          <div className="row">
            <h2 className="text-center heading_primary">Nuestros artesanos</h2>
            <form>
              <div className="form-group d-flex flex-column align-items-center">
                <label htmlFor="exampleInputEmail1">
                  Filtrar por categoria
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-select input_primary"
                >
                  <option value=""></option>
                  <option value="">Test</option>
                  <option value="">Test1</option>
                </select>
              </div>
            </form>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="card artesano-card shadow border-0">
                <div className="card-img-block">
                  <img
                    className="img-fluid w-100 rounded-top"
                    src={bgArtesano}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body position-relative pt-5">
                  <div className="d-flex flex-row profile-container position-absolute">
                  <img
                    src="https://randomuser.me/api/portraits/men/64.jpg"
                    alt="profile-image"
                    className="profile"
                  />
                  <h5 className="card-title mt-4 pt-2">Landon Hunt</h5>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat esse iusto labore et cumque impedit eum dicta pariatur dolorum voluptas tempore
                  </p>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="button-primary">Ver más</button>
            </div>
          </div>
        </div>
      </section>

      <section id="call-to-action" className="d-flex justify-content-center mt-5">
        <div className="row bg_secondary p-4 p-md-5 w-75 rounded d-flex align-items-center">
          <div className="col-md-8">
            <h3 className="text-white">Crea tu propio sitio web facil y rapido desde <strong className="heading_primary">Artetopia</strong> y comienza a vender tus artesanias.</h3>
          </div>
          <div className="col-md-4 text-center">
            <button className="button-primary">Registrate</button>
          </div>
        </div>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
